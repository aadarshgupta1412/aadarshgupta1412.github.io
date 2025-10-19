// Design tokens inspired by Hamish's portfolio
export const tokens = {
  // Base colors using OKLCH
  colors: {
    dark: {
      background: 'oklch(17.76% 0 0)',
      backgroundLight: 'oklch(21.78% 0 0)',
      primary: 'oklch(84.42% 0.19 202.24)',
      accent: 'oklch(84.42% 0.19 202.24)',
      error: 'oklch(65.91% 0.249 13.76)',
      text: 'oklch(100% 0 0)',
      textTitle: 'oklch(100% 0 0)',
      textBody: 'oklch(100% 0 0 / 0.8)',
      textLight: 'oklch(100% 0 0 / 0.6)',
    },
    light: {
      background: 'oklch(96.12% 0 0)',
      backgroundLight: 'oklch(100% 0 0)',
      primary: 'oklch(0% 0 0)',
      accent: 'oklch(84.42% 0.19 202.24)',
      error: 'oklch(63.17% 0.259 25.41)',
      text: 'oklch(0% 0 0)',
      textTitle: 'oklch(0% 0 0 / 0.9)',
      textBody: 'oklch(0% 0 0 / 0.75)',
      textLight: 'oklch(0% 0 0 / 0.55)',
    },
  },
  // Typography
  fonts: {
    sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  fontSizes: {
    h0: { desktop: '7.5rem', laptop: '5.625rem', tablet: '5rem', mobile: '2.5rem' },
    h1: { desktop: '5rem', laptop: '4.375rem', tablet: '3.75rem', mobile: '2.5rem' },
    h2: { desktop: '3.625rem', laptop: '3.125rem', tablet: '3rem', mobile: '2.125rem' },
    h3: { desktop: '2.375rem', laptop: '2.25rem', tablet: '2rem', mobile: '1.75rem' },
    h4: { desktop: '1.75rem', laptop: '1.625rem', tablet: '1.5rem', mobile: '1.375rem' },
    h5: { desktop: '1.5rem', laptop: '1.375rem', tablet: '1.25rem', mobile: '1.125rem' },
    bodyXL: '1.375rem',
    bodyL: '1.25rem',
    bodyM: '1.125rem',
    bodyS: '1rem',
    bodyXS: '0.875rem',
  },
  // Spacing
  space: {
    xs: '0.25rem',
    s: '0.5rem',
    m: '1rem',
    l: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
    '5xl': '8rem',
    outer: { desktop: '4rem', laptop: '3rem', mobile: '1.5rem' },
  },
  // Durations
  duration: {
    xs: '200ms',
    s: '300ms',
    m: '400ms',
    l: '600ms',
    xl: '800ms',
  },
  // Bezier curves
  bezier: {
    fastoutSlowin: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  },
  // Z-index
  zIndex: {
    0: 0,
    1: 4,
    2: 8,
    3: 16,
    4: 32,
    5: 64,
  },
};

export type Theme = 'dark' | 'light';
