'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  SphereGeometry,
  Mesh,
  ShaderMaterial,
  AmbientLight,
  DirectionalLight,
  Vector3,
  LinearSRGBColorSpace,
} from 'three';

// Vertex shader with turbulence (Hamish's implementation)
const vertexShader = `
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float pnoise(vec3 P, vec3 rep) {
  vec3 Pi0 = mod(floor(P), rep);
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep);
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P);
  vec3 Pf1 = Pf0 - vec3(1.0);
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

float turbulence(vec3 p) {
  float t = -0.5;
  for (float f = 1.0; f <= 10.0; f++) {
    float power = pow(2.0, f);
    t += abs(pnoise(vec3(power * p), vec3(10.0, 10.0, 10.0)) / power);
  }
  return t;
}

uniform float time;
varying vec2 vUv;
varying float noise;
varying vec3 vNormal;
varying vec3 vViewPosition;

void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  
  noise = turbulence(0.01 * position + normal + time * 0.8);
  vec3 displacement = vec3((position.x) * noise, position.y * noise, position.z * noise);
  
  vec4 mvPosition = modelViewMatrix * vec4((position + normal) + displacement, 1.0);
  vViewPosition = -mvPosition.xyz;
  
  gl_Position = projectionMatrix * mvPosition;
}
`;

// Fragment shader with cyan/greenish tones (Hamish's approach)
const fragmentShader = `
uniform float time;
uniform vec3 lightPosition;
uniform vec3 lightColor;
uniform float ambientIntensity;
uniform float directionalIntensity;

varying vec2 vUv;
varying float noise;
varying vec3 vNormal;
varying vec3 vViewPosition;

void main() {
  // Hamish's exact color calculation - creates cyan/blue tones
  vec3 color = vec3(vUv * (0.2 - 2.0 * noise), 1.0);
  vec3 finalColors = vec3(color.b * 1.5, color.r, color.r);
  vec3 baseColor = cos(finalColors * noise * 3.0);
  
  // Phong lighting (matching Hamish's approach)
  vec3 normal = normalize(vNormal);
  vec3 lightDir = normalize(lightPosition - vViewPosition);
  vec3 viewDir = normalize(-vViewPosition);
  vec3 halfDir = normalize(lightDir + viewDir);
  
  // Simple lighting - ambient + diffuse
  vec3 ambient = baseColor * ambientIntensity;
  
  float diff = max(dot(normal, lightDir), 0.0);
  vec3 diffuse = baseColor * diff * lightColor * directionalIntensity;
  
  // Combine - keep it simple and bright
  vec3 finalColor = ambient + diffuse;
  
  gl_FragColor = vec4(finalColor, 1.0);
}
`;

interface DisplacementSphereProps {
  className?: string;
}

export function DisplacementSphere({ className = '' }: DisplacementSphereProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { theme } = useTheme();
  const mouseRef = useRef({ x: 0.8, y: 0.5 });
  const targetRotationRef = useRef({ x: 0, y: 0 });
  const currentRotationRef = useRef({ x: 0, y: 0 });
  
  // Store refs for cleanup and updates
  const sceneRef = useRef<Scene | null>(null);
  const rendererRef = useRef<WebGLRenderer | null>(null);
  const materialRef = useRef<ShaderMaterial | null>(null);
  const lightsRef = useRef<{ dir: DirectionalLight; ambient: AmbientLight } | null>(null);

  useEffect(() => {
    if (!canvasRef.current || prefersReducedMotion) return;

    const canvas = canvasRef.current;
    const scene = new Scene();
    sceneRef.current = scene;
    
    const camera = new PerspectiveCamera(54, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 52;

    const renderer = new WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: 'high-performance',
      failIfMajorPerformanceCaveat: true,
    });
    
    // Match Hamish's renderer setup
    const adjustedHeight = window.innerHeight + window.innerHeight * 0.3;
    renderer.setSize(window.innerWidth, adjustedHeight);
    renderer.setPixelRatio(1);
    renderer.outputColorSpace = LinearSRGBColorSpace;
    rendererRef.current = renderer;

    // Create sphere with custom shader material
    const geometry = new SphereGeometry(32, 128, 128);
    
    // Hamish's exact lighting values
    const isDark = theme === 'dark';
    
    const material = new ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        lightPosition: { value: new Vector3(100, 100, 200) },
        lightColor: { value: [1.0, 1.0, 1.0] },
        ambientIntensity: { value: isDark ? 0.35 : 0.7 },
        directionalIntensity: { value: isDark ? 0.45 : 0.8 },
      },
      vertexShader,
      fragmentShader,
      transparent: false,
    });
    materialRef.current = material;

    const sphere = new Mesh(geometry, material);
    sphere.position.z = 0;
    scene.add(sphere);

    // Add lights (Hamish's exact values)
    const dirLight = new DirectionalLight(0xffffff, isDark ? 2.0 : 1.8);
    const ambientLight = new AmbientLight(0xffffff, isDark ? 0.4 : 2.7);
    dirLight.position.set(100, 100, 200);
    scene.add(dirLight, ambientLight);
    lightsRef.current = { dir: dirLight, ambient: ambientLight };

    // Position sphere based on screen size
    const updateSpherePosition = () => {
      if (window.innerWidth <= 768) {
        sphere.position.x = 14;
        sphere.position.y = 10;
      } else if (window.innerWidth <= 1024) {
        sphere.position.x = 18;
        sphere.position.y = 14;
      } else {
        sphere.position.x = 22;
        sphere.position.y = 16;
      }
    };
    updateSpherePosition();

    const startTime = Date.now();

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current = {
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      };
      targetRotationRef.current = {
        x: (mouseRef.current.y - 0.5) * 0.5,
        y: (mouseRef.current.x - 0.5) * 0.5,
      };
    };

    // Resize handler
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const adjustedHeight = height + height * 0.3;

      camera.aspect = width / adjustedHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(width, adjustedHeight);
      updateSpherePosition();
    };

    // Animation loop
    let frameId: number;
    const animate = () => {
      if (material.uniforms.time) {
        material.uniforms.time.value = 0.00005 * (Date.now() - startTime);
      }

      // Smooth rotation interpolation
      currentRotationRef.current.x += (targetRotationRef.current.x - currentRotationRef.current.x) * 0.05;
      currentRotationRef.current.y += (targetRotationRef.current.y - currentRotationRef.current.y) * 0.05;

      sphere.rotation.x = currentRotationRef.current.x;
      sphere.rotation.y = currentRotationRef.current.y;
      sphere.rotation.z += 0.001;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      sceneRef.current = null;
      rendererRef.current = null;
      materialRef.current = null;
      lightsRef.current = null;
    };
  }, [prefersReducedMotion]);

  // Update lighting when theme changes (Hamish's approach)
  useEffect(() => {
    if (!materialRef.current || !lightsRef.current) return;

    const isDark = theme === 'dark';
    
    // Update shader uniforms - balanced for both modes
    materialRef.current.uniforms.ambientIntensity.value = isDark ? 0.35 : 0.7;
    materialRef.current.uniforms.directionalIntensity.value = isDark ? 0.45 : 0.8;
    
    // Update Three.js lights (for visual reference, shader does main work)
    lightsRef.current.dir.intensity = isDark ? 2.0 : 1.8;
    lightsRef.current.ambient.intensity = isDark ? 0.4 : 2.7;
  }, [theme]);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ 
        zIndex: 0,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    >
      <canvas 
        ref={canvasRef}
        className="w-full h-full"
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0,
          animation: 'sphereFadeIn 3s ease-in-out 0.5s forwards',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
