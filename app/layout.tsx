import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Footer } from "@/components/Footer";
import { ClientLayout } from "@/components/ClientLayout";
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
    images: [
      {
        url: "https://example.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
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
          <ClientLayout>
            <main>{children}</main>
            <Footer />
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
