"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Pass default props recommended by next-themes for Next.js App Router
  return (
    <NextThemesProvider
        attribute="class" 
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        {...props}
    >
        {children}
    </NextThemesProvider>
  );
} 