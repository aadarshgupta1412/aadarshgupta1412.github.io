# Portfolio Animation Features

This portfolio includes advanced animations inspired by [Hamish Williams' portfolio](https://hamishw.com/).

## ✨ Key Features Implemented

### 1. **DecoderText Component** (`components/DecoderText.tsx`)
- Scrambles text with Japanese Katakana characters before revealing the actual text
- Creates a "hacking" or "decoding" effect
- Used for the name reveal in the hero section
- Respects `prefers-reduced-motion` accessibility setting

### 2. **DisplacementSphere Component** (`components/DisplacementSphere.tsx`)
- Interactive 3D sphere built with Three.js and WebGL shaders
- Features vertex displacement using Simplex noise for organic movement
- Responds to mouse movement with smooth rotation interpolation
- Theme-aware colors (changes based on dark/light mode)
- Positioned strategically in the background
- Lazy-loaded for optimal performance
- Auto-adapts position for mobile/tablet/desktop

**Shader Features:**
- Custom vertex shader with noise-based displacement
- Fragment shader with gradient and shimmer effects
- Real-time animation loop

### 3. **RotatingText Component** (`components/RotatingText.tsx`)
- Cycles through multiple text strings with smooth transitions
- Uses Framer Motion for entrance/exit animations
- Includes blur effects for smoother transitions
- Customizable interval and prefix
- Used to rotate disciplines: Researcher → System Architect → ML Engineer → Problem Solver

### 4. **AnimatedScrollIndicator** (`components/AnimatedScrollIndicator.tsx`)
- Animated scroll indicator with mouse icon (desktop) and arrow (mobile)
- Fades out when user scrolls
- Bouncing animation to encourage scrolling
- Clickable to smoothly scroll to next section

### 5. **TextReveal Components** (`components/TextReveal.tsx`)
- **TextReveal**: Slide-up animation with colored bar wipe effect
- **TextRevealLine**: Simple fade-in with upward motion
- Used for staggered text animations throughout the hero section

### 6. **Enhanced HeroSection** (`components/HeroSection.tsx`)
All components integrated into a cohesive hero experience:
- Decoder text for name
- Rotating disciplines animation
- Text reveal effects with timing delays
- 3D sphere background
- Animated horizontal separator line
- Scroll indicator
- Responsive design for all screen sizes

## 🎨 Animation Timing

The hero section animations are carefully choreographed:

1. **0.2s** - Name decoder starts
2. **0.5s** - Decoder effect completes
3. **0.6s** - Main title reveals
4. **0.8s** - Tagline reveals
5. **1.2s** - Separator line animates, description fades in
6. **1.4s** - CTA buttons appear
7. **Continuous** - Disciplines rotate every 3 seconds

## 🚀 Performance Optimizations

1. **Lazy Loading**: Three.js sphere is lazy-loaded to reduce initial bundle size
2. **Reduced Motion**: All animations respect `prefers-reduced-motion`
3. **Conditional Rendering**: Heavy components only render on client-side
4. **RequestAnimationFrame**: Proper cleanup to prevent memory leaks
5. **Shader Optimization**: Minimal shader complexity for smooth 60fps

## 📦 Dependencies Added

- `three` - 3D graphics library
- `@types/three` - TypeScript definitions
- `framer-motion` - Animation library (already present)

## 🎯 Browser Support

- Modern browsers with WebGL support
- Graceful degradation for older browsers
- Mobile-optimized with responsive breakpoints

## 🔧 Customization

### Change Rotating Disciplines
Edit `lib/data.ts`:
```typescript
disciplines: ['Your', 'Custom', 'Disciplines', 'Here']
```

### Adjust Animation Speeds
- **DecoderText**: Change duration in shader animation loop (default: 2000ms)
- **RotatingText**: Pass `interval` prop (default: 3000ms)
- **Sphere rotation**: Modify rotation increment in DisplacementSphere

### Theme Colors
The sphere automatically adapts to theme:
- Light mode: `#0070f3` (blue)
- Dark mode: `#00e5cc` (cyan)

## 🐛 Troubleshooting

**Sphere not appearing:**
- Check browser console for WebGL errors
- Ensure browser supports WebGL
- Check if `prefers-reduced-motion` is enabled (sphere won't render)

**Performance issues:**
- Reduce sphere geometry segments (currently 128x128)
- Lower pixel ratio in renderer settings
- Disable sphere on mobile devices

**Text animations stuttering:**
- Check for other heavy processes
- Ensure Framer Motion is properly installed
- Clear browser cache and rebuild

## 📝 Notes

- All animations use CSS custom properties for consistent theming
- Components are fully typed with TypeScript
- Accessibility features included (ARIA labels, screen reader text)
- Mobile-first responsive design

