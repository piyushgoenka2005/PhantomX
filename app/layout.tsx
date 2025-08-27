import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

export const metadata: Metadata = {
  metadataBase: new URL('https://phantomx-htb-clone.vercel.app'),
  title: 'Hack The Box Clone',
  description: 'A responsive and functional clone of the Hack The Box website built with Next.js and Tailwind CSS, featuring a cybersecurity theme.',
  keywords: ['Hack The Box', 'cybersecurity', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'React', 'TypeScript', 'responsive design'],
  openGraph: {
    title: 'Hack The Box Clone',
    description: 'A responsive and functional clone of the Hack The Box website built with Next.js and Tailwind CSS, featuring a cybersecurity theme.',
    url: 'https://phantomx-htb-clone.vercel.app',
    siteName: 'Hack The Box Clone',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hack The Box Clone',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hack The Box Clone',
    description: 'A responsive and functional clone of the Hack The Box website built with Next.js and Tailwind CSS, featuring a cybersecurity theme.',
    creator: '@yourtwitterhandle',
    images: ['/twitter-image.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-900">
          {children}
        </div>
      </body>
    </html>
  )
}
