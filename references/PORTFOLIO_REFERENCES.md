# Portfolio Website Requirements and Implementation Plan

## Overview

Minimalist developer/researcher portfolio website to be hosted on GitHub Pages. Clean, professional design with modern interactions and academic aesthetic.

## Analyzed References & Key Features

### Reference Sites Analyzed
1. **sebastinsanty.com** - Clean heading fonts, minimalist typography
2. **amlankar.github.io** - Professional affiliations with logos, clean layout
3. **ramneet-singh.netlify.app** - Experience timeline, project filtering with tags
4. **bkhmsi.github.io** - Blog integration, academic structure
5. **jonathanxu.com** - Diverse sections, animated symbols, personal voice
6. **sharut (MIT)** - News section, Awards/Leadership subsections
7. **digantamisra98.github.io** - Email scrambler, extensive news feed
8. **nikitbegwani.github.io** - Clean biography structure, interests section
9. **kshitijkhandelwal.com** - Ultra-minimalist, personal philosophy/theme

## Site Structure

### Core Navigation
- Home/About
- Experience
- Projects
- Publications/Research
- Blog
- Art & Photography
- Contact

### Essential Header/Footer Links
- CV (PDF download)
- Google Scholar
- LinkedIn
- GitHub
- Email (with optional scrambler)

## Key Page Sections

### 1. Hero/About Section
**Inspiration:** All references, especially kshitijkhandelwal.com for tone
- **Profile photo** (clickable, links to photography/portfolio page)
- **Name** with clean heading font (monospace or serif - sebastinsanty.com style)
- **Current role/affiliation** with organization logo
- **Brief bio** (2-3 sentences, personal but professional)
- **Research interests** (bullet points or tags)
- **Social links** as icons (open in new tabs)

### 2. News/Updates Section
**Inspiration:** digantamisra98.github.io, sharut (MIT)
- **Date-prefixed entries** (MM/YYYY format)
- **Chronological list** (newest first, 5-8 items visible)
- **"View all news →"** expandable link
- **Format:** `[10/2025]: Paper accepted to Conference Name`
- All links open in new tabs

### 3. Experience Section
**Inspiration:** ramneet-singh.netlify.app
- **Vertical timeline** with staggered scroll animations
- **Per entry:** Logo, Role (bold), Organization (linked), Duration, Location
- **Bullet points** for key achievements/responsibilities
- **Tech tags** for skills used
- **Hover effects:** Border highlights, subtle elevation
- **Responsive:** Stacks vertically on mobile

### 4. Projects Section
**Inspiration:** ramneet-singh.netlify.app
- **Tag-based filtering** (e.g., "All", "ML", "Web Dev", "Research")
- **Grid layout** (3 cols desktop → 2 tablet → 1 mobile)
- **Project cards:** Title, Description, Tags, Links (Code/Demo/Paper)
- **Smooth transitions** between filter states
- **Hover:** Card elevation/shadow effect
- **Links:** All open in new tabs

### 5. Publications/Research Section
**Inspiration:** sebastinsanty.com, amlankar.github.io
- **Paper title** (linked to publication)
- **Authors** (your name highlighted/bold)
- **Venue/Conference** with year
- **Links:** [PDF], [Code], [Project Page], [arXiv] (new tabs)
- **Optional:** Award badges (Best Paper, Spotlight)
- **Grouped by year**, most recent first

### 6. Blog Section
**Inspiration:** bkhmsi.github.io, jonathanxu.com
- **Card or list layout**
- **Per post:** Title, Date, Excerpt, Tags
- **Animation symbols** for visual interest
- **"Read more →"** links to full post
- **Responsive grid**

### 7. Art & Photography Section
**Inspiration:** User requirement for portfolio showcase
- **Grid or masonry layout**
- **Lightbox/modal** on click
- **Hover:** Caption overlay
- **Lazy loading** for performance
- **Category filters** (optional)

### 8. Awards & Achievements Section
**Inspiration:** sharut (MIT) - Research Outreach and Leadership structure
- **Subsections:**
  - **Awards:** Scholarships, honors, competition wins
  - **Talks:** Conference presentations, invited talks (with links/recordings)
  - **Teaching:** TA/instructor positions
  - **Service:** Reviewing, program committees
  - **Leadership:** Community involvement, mentorship
- **Format:** Grouped by category with clear headers, dates, concise entries

### 9. Contact Section
**Inspiration:** General best practices + digantamisra98.github.io for scrambler
- **Email** (optional JavaScript scrambler to prevent bots)
- **Social links** (GitHub, LinkedIn, Twitter, Scholar)
- **Location** (city/region)
- **Optional:** Contact form or meeting scheduler link

## Core Features & Behavior

### Critical: Link Behavior
**All external links MUST open in new tabs** (`target="_blank" rel="noopener noreferrer"`)
- Publication/paper links
- Social media links  
- Project code/demo links
- Organization/company links
- External references

### Theme Toggle (Light/Dark Mode)
**Critical Requirement: Smooth, polished toggle UI**
- **Toggle Component:** Use shadcn/ui's custom toggle button with icon animation
  - Sun icon (☀️) for light mode / Moon icon (🌙) for dark mode
  - Smooth rotation/fade transition between icons (300ms ease)
  - Hover effect with subtle scale/glow
- **Theme Transitions:**
  - CSS transition on all theme-dependent properties (200-300ms)
  - Smooth color changes across entire page (no jarring switches)
  - Use `transition-colors duration-300` on body/root elements
- **Implementation:**
  - System preference detection on initial load
  - Persistent storage (localStorage) for user preference
  - next-themes library for seamless theme management
  - CSS variables for all theme colors
  - No flash of unstyled content (FOUC)
- **Toggle Location:** Fixed in header (top-right) or floating bottom-right corner

### Animations
**Scroll Animations:**
- Intersection Observer API for performance
- Fade-in/slide-up on scroll reveal
- Staggered list item animations
- Respect `prefers-reduced-motion`

**Interaction Animations:**
- Nav link underline on hover
- Card elevation on hover
- Button state transitions
- Subtle, professional timing

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px (sm), 768px (md), 1024px (lg)
- Hamburger menu for mobile
- Flexible grids, adaptive layouts

## Smooth UI Requirements

### Overall Polish Standards
**Every interaction must feel buttery smooth:**
1. **All transitions:** 200-400ms with easing functions (ease-in-out, cubic-bezier)
2. **Hover states:** Instant feedback (scale, color, shadow changes)
3. **Loading states:** Skeleton screens or smooth spinners (no jarring content shifts)
4. **Page navigation:** Fade transitions between routes
5. **Scroll behavior:** Smooth scrolling (`scroll-behavior: smooth`)
6. **Motion:** Respect `prefers-reduced-motion` for accessibility

### Required Smooth Elements
- **Navigation:** Underline slide animation on hover (300ms)
- **Cards:** Elevation shadow + scale on hover (200ms transform)
- **Buttons:** Ripple effect or subtle scale (150ms)
- **Images:** Fade-in on load with blur-up placeholder
- **Lists:** Stagger animation children (50ms delay between items)
- **Modals/Dialogs:** Backdrop fade + content scale animation
- **Theme Toggle:** Smooth color interpolation across all elements

### Libraries for Smooth UI
- **shadcn/ui:** Pre-built accessible components with smooth animations
- **Framer Motion:** Advanced animations (variants, spring physics)
- **Tailwind Transitions:** Built-in utility classes for common transitions
- **next-themes:** Flicker-free theme switching
- **Radix UI** (used by shadcn): Headless components with animation support

## Technical Implementation

### Tech Stack
**Critical: All UI must be smooth, polished, and minimalist**
- **Framework:** Next.js 14+ with Static Export
- **Styling:** TailwindCSS with custom animations
- **Component Library:** shadcn/ui (for all UI components)
  - Button, Card, Toggle, Dialog/Modal components
  - Pre-built with smooth transitions and accessibility
- **Icons:** Lucide React (clean, minimalist icons)
- **Animations:** 
  - **Framer Motion** for complex scroll animations and page transitions
  - **TailwindCSS transitions** for micro-interactions
  - **CSS transitions** for theme switching and hover effects
- **Theme Management:** next-themes (for smooth dark/light mode)
- **Fonts:** 
  - Headings: JetBrains Mono (monospace) or Merriweather (serif)
  - Body: Inter or -apple-system (native sans-serif)
  - Load via next/font for zero layout shift

### Performance Targets
- Lighthouse score > 90 all categories
- First Contentful Paint < 1.5s
- Optimized images (Next.js Image component)
- Lazy loading for heavy content
- Minimal JS bundle via code splitting

### Accessibility & SEO
- Semantic HTML, ARIA labels
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly
- Meta tags, Open Graph
- Structured data (JSON-LD)
- Sitemap, robots.txt

## V1 Implementation Phases

### Phase 1: Core Setup (Week 1)
1. Initialize Next.js project with static export config
2. Install dependencies:
   ```bash
   npx create-next-app@latest portfolio --typescript --tailwind --app
   npx shadcn-ui@latest init
   npm install framer-motion next-themes lucide-react
   ```
3. Add shadcn/ui components: `npx shadcn-ui@latest add button toggle`
4. Basic layout structure (Header, Footer, Navigation)
5. **Theme toggle implementation** (smooth animated button):
   - Use next-themes provider
   - shadcn/ui Toggle component with Sun/Moon icons
   - Smooth icon rotation/fade transition
   - Prevent FOUC with proper script injection
6. Responsive navigation with hamburger menu (shadcn Sheet component)

### Phase 2: Main Content Sections (Week 2)
1. **Hero/About section** with profile photo, bio, social links
2. **Experience timeline** with animations and logos
3. **Publications section** with links and formatting
4. **News section** with chronological entries

### Phase 3: Projects & Creative (Week 3)
1. **Projects section** with tag filtering system
2. **Blog page** (list view with card layout)
3. **Photography/Art gallery** with grid layout
4. **Awards & Achievements** section

### Phase 4: Polish & Deploy (Week 4)
1. Scroll animations (Intersection Observer)
2. Hover effects and micro-interactions
3. Image optimization and lazy loading
4. SEO meta tags, sitemap, Open Graph
5. Accessibility audit and fixes
6. GitHub Pages deployment setup
7. Cross-browser/device testing

## Implementation Examples

### Theme Toggle Component (Smooth Animated)
```tsx
// components/ThemeToggle.tsx
'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative overflow-hidden transition-all duration-300 hover:scale-110"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
```

### Smooth Card Component Example
```tsx
// components/ProjectCard.tsx
import { motion } from 'framer-motion';

export function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="rounded-lg border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      {/* Card content */}
    </motion.div>
  );
}
```

### Global Smooth Transitions (CSS)
```css
/* globals.css */
* {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  * { transition-duration: 0ms !important; }
  html { scroll-behavior: auto; }
}
```

## Data Structure Examples

### Experience Entry
```typescript
{
  id: "msr-2025",
  role: "Research Fellow",
  organization: "Microsoft Research India",
  organizationUrl: "https://www.microsoft.com/research/",
  logo: "/logos/msr.png",
  duration: { start: "06/2024", end: "Present" },
  location: "Bangalore, India",
  description: [
    "Developed AI agents for large-scale software engineering",
    "Achieved 58% crash resolution rate on Linux kernel benchmark"
  ],
  tags: ["AI", "Systems", "Research"]
}
```

### Project Entry
```typescript
{
  id: "botblock",
  title: "BotBlock - P2P Botnet Detection",
  description: "ML-based tool for identifying P2P botnets using network traffic analysis",
  tags: ["Machine Learning", "Security", "Networks"],
  links: {
    code: "https://github.com/...",
    presentation: "https://drive.google.com/..."
  }
}
```

### Publication Entry
```typescript
{
  title: "Context is Environment",
  authors: ["Author 1", "You", "Author 3"],
  venue: "ICLR",
  year: 2024,
  links: {
    pdf: "https://arxiv.org/pdf/...",
    arxiv: "https://arxiv.org/abs/...",
    code: "https://github.com/..."
  },
  award: "Spotlight" // optional
}
```

## File Structure
```
portfolio/
├── public/
│   ├── cv.pdf
│   ├── images/
│   └── logos/
├── src/
│   ├── app/
│   │   ├── page.tsx (Home)
│   │   ├── layout.tsx
│   │   ├── blog/
│   │   ├── projects/
│   │   └── photography/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── ExperienceTimeline.tsx
│   │   ├── ProjectCard.tsx
│   │   └── NewsSection.tsx
│   ├── lib/
│   │   └── data/
│   │       ├── experience.ts
│   │       ├── projects.ts
│   │       └── publications.ts
│   └── styles/globals.css
├── content/ (markdown for blog)
└── next.config.js
```

## Design Principles for V1

1. **Minimalism** - Clean, uncluttered with intentional white space
2. **Typography** - Clear hierarchy, consistent sizing
3. **Academic Aesthetic** - Professional but with personality
4. **Performance First** - Fast load times, optimized assets
5. **Mobile Responsive** - Works seamlessly on all devices
6. **Accessibility** - Keyboard navigable, screen reader friendly

## Optional Features (Post-V1)
- Email scrambler (digantamisra98.github.io style)
- Contact form with backend
- Blog search functionality
- Reading progress indicators
- Analytics integration
- Multi-language support

---

*Last Updated: January 2025*
*Version: Updated with analyzed references - Ready for V1 implementation*