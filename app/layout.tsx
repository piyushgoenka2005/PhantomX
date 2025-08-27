import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://phantomx-htb-clone.vercel.app"),
  title: "PhantomX - Cybersecurity Platform",
  description:
    "A responsive and functional cybersecurity platform built with Next.js and Tailwind CSS, featuring advanced security solutions.",
  keywords: [
    "PhantomX",
    "cybersecurity",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "React",
    "TypeScript",
    "responsive design",
  ],
  openGraph: {
    title: "PhantomX - Cybersecurity Platform",
    description:
      "A responsive and functional cybersecurity platform built with Next.js and Tailwind CSS, featuring advanced security solutions.",
    url: "https://phantomx-htb-clone.vercel.app",
    siteName: "PhantomX",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "PhantomX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PhantomX - Cybersecurity Platform",
    description:
      "A responsive and functional cybersecurity platform built with Next.js and Tailwind CSS, featuring advanced security solutions.",
    creator: "@yourtwitterhandle",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`}>
        <div className="min-h-screen bg-gray-900 overflow-x-hidden">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
