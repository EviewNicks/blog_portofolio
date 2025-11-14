import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web Developer Portfolio | Product Development & Innovation",
  description: "Innovative web developer passionate about creating digital solutions with Next.js, Python, and modern technologies. Seeking Product Development & Innovation internship opportunities at Telkomsel.",
  keywords: "web developer, Next.js, Python, Telkomsel PDI, Product Development, Innovation, portfolio, software engineer",
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.com",
    title: "Web Developer Portfolio | Telkomsel PDI Candidate",
    description: "Innovative web developer seeking Product Development & Innovation opportunities. Specializing in Next.js, Python, and creative problem-solving.",
    siteName: "Web Developer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Developer Portfolio | Telkomsel PDI",
    description: "Innovative web developer seeking Product Development & Innovation opportunities.",
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
