# Portfolio Animations & Features

Inspired by Hamish Williams' portfolio, this document outlines all the animations and design features implemented.

## 🎨 Key Features Implemented

### 1. **Animated Hero Text** (`components/AnimatedText.tsx`)
- **Cycling Text Animation**: Automatically rotates through different roles
  - "AI/ML Engineer" → "Software Engineer" → "System Architect" → "ML Researcher" → "Problem Solver"
- **Smooth Transitions**: Fade in/out with vertical slide animation
- **Timing**: Changes every 3 seconds
- **Effect**: Creates dynamic, engaging hero section similar to Hamish's animated role text

### 2. **Interactive Gradient Background** (`components/GradientBackground.tsx`)
- **Mouse-Reactive Gradients**: Three animated gradient blobs that follow mouse movement
- **Color Palette**:
  - Purple gradient: `#667eea → #764ba2`
  - Pink gradient: `#f093fb → #f5576c`
  - Blue gradient: `#4facfe → #00f2fe`
- **Effects**:
  - Spring physics for smooth mouse tracking
  - Continuous scale pulsing (breathing effect)
  - Blur effect for soft, ambient lighting
  - Low opacity (10-20%) for subtle background enhancement

### 3. **Device Frame Component** (`components/DeviceFrame.tsx`)
- **Laptop Frame**: Professional mockup with bezel and bottom bar
- **Mobile Frame**: Modern phone design with notch
- **Features**:
  - Gradient borders using primary/accent colors
  - Shadow effects for depth
  - Scroll-triggered animations
  - Ready for project screenshots/demos

### 4. **Enhanced Project Cards**
- **Hover Animations**:
  - Lifts up 8px on hover (`y: -8`)
  - Border color transition to accent
  - Background color change
  - Gradient overlay (10% opacity)
  - Arrow indicator slides in from right
- **Tag Animations**: Staggered appearance (50ms delay between tags)
- **Title Animation**: Slides right 4px on hover
- **Smooth Transitions**: 300ms easing for all effects

### 5. **Stat Cards with Pop Effect**
- **Number Animation**:
  - Scales from 0.5 to 1.0 with bounce (backOut easing)
  - Fades in from opacity 0
  - Triggers on scroll into view
- **Hover Effect**: Scales to 1.05 with border highlight
- **Background**: Subtle card design with hover border

### 6. **Scroll-Triggered Animations**
All major sections use `whileInView` animations:
- **Featured Work Section**: Fades in from bottom (30px up)
- **Project Cards**: Staggered animation (100ms delay between cards)
- **Stats**: Staggered scale animation (100ms delay)
- **CTA Section**: Sequential fade-in for heading, text, button

### 7. **Global CSS Enhancements**
- **Smooth Scrolling**: `scroll-behavior: smooth`
- **Universal Transitions**: 300ms cubic-bezier easing on all color/transform properties
- **Custom Scrollbar**: Themed with primary colors
- **Selection Color**: Primary color background
- **Accessibility**: Respects `prefers-reduced-motion`
- **Focus Styles**: Visible outline for keyboard navigation

## 🎭 Animation Specifications

### Timing & Easing
- **Fast**: 200ms - Micro-interactions (hover states)
- **Medium**: 300-400ms - Standard transitions (cards, buttons)
- **Slow**: 600-800ms - Major animations (page load, scroll reveals)
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` (ease-out)

### Motion Principles
1. **Purposeful**: Every animation serves a functional purpose
2. **Smooth**: No jarring or abrupt movements
3. **Performant**: Uses transform/opacity for GPU acceleration
4. **Accessible**: Respects reduced-motion preferences
5. **Consistent**: Same timing functions throughout

## 🚀 Key Differences from Hamish's Portfolio

### Similarities Implemented:
✅ Animated hero text cycling through roles
✅ Gradient background with interactive elements
✅ Smooth Framer Motion animations throughout
✅ Project cards with sophisticated hover effects
✅ Scroll-triggered reveal animations
✅ Custom scrollbar and selection colors
✅ Professional device frame mockups

### Unique to Your Portfolio:
- Gradient blobs are mouse-reactive (Hamish uses displacement sphere)
- Stats section with bounce animation
- Different color palette (indigo/purple vs Hamish's custom theme)
- Simpler geometric shapes instead of 3D Three.js elements
- Focus on accessibility with ARIA labels

## 📦 Dependencies

- **framer-motion**: `^11.x` - Animation library
- **next**: `14.2.18` - Framework
- **react**: `^18.x` - UI library
- **tailwindcss**: `^3.x` - Styling

## 🎯 Performance

- **First Load JS**: ~138KB for homepage (with animations)
- **Static Generation**: All pages pre-rendered
- **Bundle Optimization**: Code splitting by route
- **GPU Acceleration**: Transform and opacity animations
- **Lazy Loading**: Animations trigger only on viewport entry

## 🔧 Customization

### To adjust animation speed:
```tsx
// In any motion component
transition={{ duration: 0.6 }} // Change duration
```

### To modify gradient colors:
```tsx
// In GradientBackground.tsx
style={{
  background: 'linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%)',
}}
```

### To change text cycling speed:
```tsx
// In AnimatedText.tsx
setInterval(() => {
  // ...
}, 3000); // Change milliseconds
```

## 📱 Responsive Behavior

All animations are responsive and work seamlessly on:
- Desktop (hover effects, mouse tracking)
- Tablet (touch-friendly, reduced motion complexity)
- Mobile (optimized for touch, smaller transforms)

## ✨ Best Practices Followed

1. **Viewport-based triggers**: Animations only fire when elements are visible
2. **Once mode**: Scroll animations play once (no re-triggering)
3. **Staggered children**: Sequential reveals feel more natural
4. **Transform over position**: Better performance
5. **Reduced motion support**: Accessibility-first approach

---

## 🎨 Color Palette

### Light Mode
- Background: `#FFFFFF`
- Text: `#1a1a1a` / `#4a4a4a` / `#757575`
- Primary: `#6366f1` (Indigo)
- Accent: `#8b5cf6` (Purple)

### Dark Mode
- Background: `#0a0a0a`
- Text: `#f0f0f0` / `#b0b0b0` / `#808080`
- Primary: `#818cf8` (Light Indigo)
- Accent: `#a78bfa` (Light Purple)

---

*Last Updated: January 2025*
*Inspired by: [hamishw.com](https://hamishw.com)*
