# Design System & Features Documentation

Complete documentation of the portfolio's design system, animations, and interactive features.

## 🎨 Color System

### Light Mode
```css
--background: rgb(255, 255, 255)
--foreground: rgb(10, 10, 15)
--text-title: #111
--text-body: #555
--text-light: #888
--primary: #0070f3        /* Bright blue */
--accent: #00a8e8         /* Cyan */
--background-light: #f8f9fa
--surface: #ffffff
--border: rgba(0, 0, 0, 0.08)
```

### Dark Mode
```css
--background: rgb(17, 17, 24)
--foreground: rgb(235, 235, 245)
--text-title: #e4e4e7
--text-body: #a0a0ab
--text-light: #696974
--primary: #00e5cc        /* Vibrant cyan */
--accent: #5f9df7         /* Sky blue */
--background-light: #1a1a24
--surface: #1f1f2e
--border: rgba(255, 255, 255, 0.08)
```

### Design Rationale
- **Primary (Blue/Cyan)**: Technology, innovation, trust
- **Accent**: Complementary color for highlights
- **Background**: Deep navy-black for dark mode (easier on eyes than pure black)
- **Text Hierarchy**: Three levels for clear visual hierarchy

## 🎭 Animation System

### Core Principles
1. **Purposeful**: Every animation enhances usability or provides feedback
2. **Smooth**: 60fps performance using GPU-accelerated properties
3. **Accessible**: Respects `prefers-reduced-motion`
4. **Consistent**: Standard timing and easing throughout

### Timing Scale
| Speed | Duration | Use Case |
|-------|----------|----------|
| Fast | 200ms | Micro-interactions, hover states |
| Medium | 300-400ms | Card transitions, button states |
| Slow | 600-800ms | Page sections, scroll reveals |

### Easing Functions
- **ease-out**: `cubic-bezier(0.4, 0, 0.2, 1)` - Default for most animations
- **backOut**: Spring-like bounce effect for numbers/stats
- **Custom**: `[0.22, 1, 0.36, 1]` for highlight reveals

## 🧩 Component Library

### 1. Hero Section (`components/HeroSection.tsx`)
**Features:**
- Animated text highlight with color fill effect
- Staggered content reveal (overline → heading → subtitle → description → CTAs)
- Scroll indicator with bounce animation
- Responsive typography scaling

**Animation Sequence:**
1. Overline fades in (delay: 0.1s)
2. Name/heading slides up (delay: 0.2s)
3. Highlight box animates across text (delay: 0.4s)
4. Subtitle appears (delay: 0.6s)
5. Description fades in (delay: 0.6s)
6. CTA buttons slide up (delay: 0.8s)
7. Scroll indicator appears (delay: 1.2s)

### 2. Vertical Navigation (`components/VerticalNav.tsx`)
**Features:**
- Fixed left-side navigation
- Vertical text orientation
- Active state indicator with layout animation
- Hover slide effect (4px left)
- Only visible on desktop (lg breakpoint)

**Interaction:**
```tsx
// Active indicator follows current route
<motion.div layoutId="activeIndicator" />
```

### 3. Highlight Text (`components/HighlightText.tsx`)
**Features:**
- Animated background reveal effect
- Configurable color and delay
- Scales from left to right (scaleX animation)
- Text appears after background fills

**Usage:**
```tsx
<HighlightText delay={0.4} color="var(--primary)">
  AI/ML Engineer
</HighlightText>
```

### 4. Project Showcase (`components/ProjectShowcase.tsx`)
**Features:**
- Large card layout for featured work
- Device frame mockup support
- Gradient overlay on hover
- Scroll-triggered reveal
- Arrow indicator animation
- Tag pills with staggered appearance

**Variants:**
- `default`: Standard card
- `large`: Full-width with device frame
- `featured`: Same as large with emphasis

### 5. Social Links (`components/SocialLinks.tsx`)
**Features:**
- Fixed bottom-left position
- Staggered fade-in on page load
- Scale and lift on hover
- Icon-only design for minimal footprint

### 6. Device Frame (`components/DeviceFrame.tsx`)
**Features:**
- Laptop mockup with bezel and bottom bar
- Mobile mockup with notch
- Gradient borders
- Shadow effects for depth
- Scroll-triggered entrance

### 7. Gradient Background (`components/GradientBackground.tsx`)
**Features:**
- Three animated gradient blobs
- Mouse-reactive movement (spring physics)
- Continuous pulsing/breathing effect
- Low opacity for subtlety (15-20%)
- Fixed positioning, doesn't scroll

### 8. Animated Text Cycling (`components/AnimatedText.tsx`)
**Features:**
- Rotates through multiple text options
- Fade in/out transitions
- Vertical slide animation
- Configurable timing (default: 3s)

## 📐 Layout Structure

### Navigation Hierarchy
```
Top: Horizontal navigation bar (Projects, About, Contact)
Left: Vertical navigation (desktop only)
Bottom-left: Social icons (desktop only)
Top-right: Theme toggle
```

### Spacing System
```css
--spacing-xs: 0.5rem   /* 8px */
--spacing-sm: 1rem     /* 16px */
--spacing-md: 1.5rem   /* 24px */
--spacing-lg: 2rem     /* 32px */
--spacing-xl: 3rem     /* 48px */
--spacing-2xl: 4rem    /* 64px */
--spacing-3xl: 6rem    /* 96px */
```

### Typography Scale
```css
/* Headings */
h1: 5xl-8xl (80px-96px desktop, 48px mobile)
h2: 4xl-6xl (48px-64px desktop, 36px mobile)
h3: 2xl-4xl (24px-36px)

/* Body */
body: text-base (16px)
large: text-xl (20px)
small: text-sm (14px)
```

## 🎯 Interactive States

### Hover Effects
| Component | Effect | Duration |
|-----------|--------|----------|
| Project Cards | Lift 8px, border color change, gradient overlay | 300ms |
| Stat Cards | Scale 1.05, border highlight | 300ms |
| Buttons | Gradient slide, scale 1.05 | 300ms |
| Links | Opacity 0.8, color change | 200ms |
| Navigation items | Slide 4px, color change | 200ms |

### Focus States
- 2px solid outline in primary color
- 2px offset for separation
- Rounded corners (4px)
- Visible for keyboard navigation

## 🚀 Performance Optimizations

### Techniques Used
1. **GPU Acceleration**: Only animate transform and opacity
2. **Viewport Triggers**: Animations fire only when visible
3. **Once Mode**: Scroll animations play once (no re-triggering)
4. **Code Splitting**: Components loaded per route
5. **Static Generation**: All pages pre-rendered

### Metrics
- **First Load JS**: ~137KB (with animations)
- **Lighthouse Score**: 90+ all categories
- **Static Export**: ✅ GitHub Pages ready

## 📱 Responsive Design

### Breakpoints
```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
```

### Mobile Adaptations
- Vertical navigation hidden (< lg)
- Social links hidden (< lg)
- Typography scales down
- Spacing reduces proportionally
- Simplified animations (reduced transforms)

## ♿ Accessibility

### Features Implemented
1. **Keyboard Navigation**: All interactive elements focusable
2. **Screen Readers**: Proper ARIA labels on icons
3. **Color Contrast**: WCAG AA compliance
4. **Motion**: Respects `prefers-reduced-motion`
5. **Focus Indicators**: Clear visible outlines
6. **Semantic HTML**: Proper heading hierarchy

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14 |
| Styling | Tailwind CSS + Custom CSS |
| Animations | Framer Motion |
| Language | TypeScript |
| Deployment | Static Export (GitHub Pages) |
| Theme | Custom dark/light mode |

## 📦 Component Props

### HeroSection
No props - uses data from `lib/data.ts`

### HighlightText
```typescript
{
  children: ReactNode;
  delay?: number;        // Animation delay in seconds
  color?: string;        // Highlight color (CSS var or hex)
}
```

### ProjectShowcase
```typescript
{
  title: string;
  description: string;
  tags: readonly string[];
  link: string;
  image?: string;
  variant?: 'default' | 'large' | 'featured';
}
```

### DeviceFrame
```typescript
{
  children: ReactNode;
  variant?: 'laptop' | 'mobile';
  className?: string;
}
```

### AnimatedText
```typescript
{
  words: string[];       // Array of text to cycle through
  className?: string;    // Additional CSS classes
}
```

## 🎨 Design Tokens

### Border Radius
```css
--radius-sm: 0.375rem   /* 6px - pills, small elements */
--radius-md: 0.5rem     /* 8px - buttons */
--radius-lg: 0.75rem    /* 12px - cards */
--radius-xl: 1rem       /* 16px - large cards */
--radius-2xl: 1.5rem    /* 24px - hero cards */
--radius-3xl: 2rem      /* 32px - project showcases */
```

### Shadows
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1)
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15)
--shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.25)
```

### Custom Properties
```css
--duration-fast: 200ms
--duration-normal: 300ms
--duration-slow: 600ms
--bezier: cubic-bezier(0.4, 0, 0.2, 1)
```

## 📝 Best Practices Followed

1. **Mobile-First**: Styles start mobile, scale up
2. **Component Isolation**: Each component is self-contained
3. **Type Safety**: Full TypeScript coverage
4. **Performance**: GPU-accelerated animations only
5. **Accessibility**: WCAG AA+ compliance
6. **DRY Principle**: Reusable components and tokens
7. **Progressive Enhancement**: Works without JavaScript
8. **SEO Optimized**: Proper meta tags and semantic HTML

## 🔄 State Management

### Theme State
- Context API for theme toggling
- LocalStorage for persistence
- System preference detection on first load
- No flash of unstyled content (FOUC)

### Animation State
- Framer Motion AnimatePresence for exit animations
- Layout animations with layoutId for smooth transitions
- Viewport-based triggers for scroll animations

---

*Last Updated: January 2025*
*Portfolio Version: 2.0*
