# Portfolio Website

A modern, minimal portfolio website inspired by Hamish Williams' design philosophy, built with Next.js 14, TypeScript, and deployed on GitHub Pages.

## 🎨 Design Philosophy

- **Dark-first theme** with seamless light/dark mode switching
- **OKLCH color space** for perceptually uniform colors
- **Smooth animations** with attention to motion preferences
- **Clean typography** focused on readability
- **Minimal navigation** with intuitive user experience

## 🚀 Features

- ✨ Modern, responsive design
- 🎨 Dark/Light theme with system preference detection
- ⚡ Static site generation for optimal performance
- 📱 Mobile-first responsive design
- 🎯 SEO optimized with meta tags
- ♿ Accessibility focused
- 🎭 Smooth animations and transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Modules
- **Animations**: Framer Motion
- **Deployment**: GitHub Pages
- **Package Manager**: pnpm

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm start
```

## 📁 Project Structure

```
portfolio/
├── app/                  # Next.js app directory
│   ├── about/           # About page
│   ├── projects/        # Projects showcase
│   ├── contact/         # Contact page
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── Navigation.tsx   # Navigation bar
│   ├── Footer.tsx       # Footer component
│   └── ThemeProvider.tsx # Theme context
├── lib/                 # Utility functions
│   └── theme.ts         # Theme tokens
├── public/              # Static assets
└── references/          # Reference materials
    └── PROFILE_INFO.md  # Professional profile data
```

## 🎯 Pages

- **Home**: Hero section with featured work and CTA
- **Projects**: Comprehensive showcase of professional and research projects
- **About**: Professional experience, education, skills, and achievements
- **Contact**: Contact information and social links

## 🚀 Deployment

The site is configured for automatic deployment to GitHub Pages via GitHub Actions:

1. Push to `main` branch
2. GitHub Actions builds the static site
3. Deploys to GitHub Pages (`out/` directory)

## 📝 Content

All professional content is sourced from `references/PROFILE_INFO.md` and integrated throughout the site.

## 🎨 Design Credits

Design inspired by [Hamish Williams' portfolio](https://hamishw.com) - adapted for Next.js with a focus on simplicity and maintainability.

## 📄 License

© 2025 Aadarsh Gupta. All rights reserved.