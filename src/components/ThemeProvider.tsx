"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class" // Apply theme class to html tag
      defaultTheme="system" // Default to system preference
      enableSystem // Enable system preference detection
      disableTransitionOnChange // Optional: disable CSS transitions when switching themes
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
} 