'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function GradientBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}
        animate={{
          x: mousePosition.x * 100 - 50,
          y: mousePosition.y * 100 - 50,
          scale: [1, 1.2, 1],
        }}
        transition={{
          x: { type: 'spring', damping: 30, stiffness: 100 },
          y: { type: 'spring', damping: 30, stiffness: 100 },
          scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
      <motion.div
        className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
        style={{
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        }}
        animate={{
          x: 100 - mousePosition.x * 100,
          y: 100 - mousePosition.y * 100,
          scale: [1, 1.3, 1],
        }}
        transition={{
          x: { type: 'spring', damping: 30, stiffness: 100 },
          y: { type: 'spring', damping: 30, stiffness: 100 },
          scale: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15"
        style={{
          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        }}
        animate={{
          x: mousePosition.x * 50 - 200,
          y: mousePosition.y * 50 - 200,
          scale: [1, 1.1, 1],
        }}
        transition={{
          x: { type: 'spring', damping: 30, stiffness: 100 },
          y: { type: 'spring', damping: 30, stiffness: 100 },
          scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
    </div>
  );
}
