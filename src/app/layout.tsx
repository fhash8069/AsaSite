import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Arab Student Association | UIC - Building Bridges, Strengthening Communities',
    template: '%s | Arab Student Association UIC'
  },
  description: 'Arab Student Association at University of Illinois Chicago (UIC) empowers Arab students through education, cultural preservation, and community building. Join our 200+ members across 15+ years of service.',
  keywords: ['Arab Student Association', 'UIC', 'University of Illinois Chicago', 'Arab students', 'cultural organization', 'student community', 'Chicago', 'ASA', 'Middle Eastern students', 'cultural heritage'],
  authors: [{ name: 'Arab Student Association UIC' }],
  creator: 'Arab Student Association UIC',
  publisher: 'Arab Student Association UIC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://asa-site-theta.vercel.app'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/assets/images/logov2.webp',
    shortcut: '/assets/images/logov2.webp',
    apple: '/assets/images/AsaLogo1x1.webp',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/assets/images/AsaLogo1x1.webp',
    },
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://asa-site-theta.vercel.app',
    siteName: 'Arab Student Association UIC',
    title: 'Arab Student Association | UIC - Building Bridges, Strengthening Communities',
    description: 'Empowering Arab students through education, cultural preservation, and community building at UIC. Join our vibrant community of 200+ members.',
    images: [
      {
        url: '/assets/images/AsaLogo1x1.webp',
        width: 1200,
        height: 630,
        alt: 'Arab Student Association UIC Logo',
        type: 'image/webp',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arab Student Association UIC',
    description: 'Building bridges and strengthening Arab student communities at UIC through education and cultural preservation.',
    images: ['/assets/images/AsaLogo1x1.webp'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* <StructuredData /> */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 