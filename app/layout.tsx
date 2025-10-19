import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aadarsh Gupta - AI/ML Engineer & Researcher",
  description: "Portfolio of Aadarsh Gupta - AI/ML Engineer specializing in production-grade AI agents, LLM integration, and machine learning applications. IIT Delhi graduate with expertise in building intelligent systems.",
  keywords: ["AI Engineer", "ML Engineer", "AI Agents", "LLM", "Machine Learning", "IIT Delhi", "Aadarsh Gupta"],
  authors: [{ name: "Aadarsh Gupta" }],
  openGraph: {
    title: "Aadarsh Gupta - AI/ML Engineer & Researcher",
    description: "Portfolio showcasing AI/ML projects, research, and professional experience",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <Navigation />
          <main className="pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
