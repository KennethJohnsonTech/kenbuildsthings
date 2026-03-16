import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Ken Builds Things — Portfolio",
  description:
    "I build AI-powered products and tools that solve real problems for real people. Full-stack developer, builder, and maker.",
  openGraph: {
    title: "Ken Builds Things — Portfolio",
    description:
      "I build AI-powered products and tools that solve real problems for real people.",
    url: "https://kenbuildsthings.com",
    siteName: "Ken Builds Things",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ken Builds Things — Portfolio",
    description:
      "I build AI-powered products and tools that solve real problems for real people.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
