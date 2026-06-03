import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Razi Ahmad | Full Stack Engineer',
  description: 'Full Stack Engineer specializing in MERN Stack, Node.js, React.js, Python, and GraphQL. 2+ years building scalable, high-performance full stack solutions.',
  keywords: ['Full Stack Engineer', 'MERN Stack', 'React.js', 'Node.js', 'Python', 'GraphQL', 'MongoDB', 'Express.js', 'Web Development', 'Mobile Development', 'Full Stack Development'],
  authors: [{ name: 'Razi Ahmad', url: 'https://github.com/raziahmad854' }],
  creator: 'Razi Ahmad',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://raziahmad.dev',
    title: 'Razi Ahmad | Frontend Engineer',
    description: 'Frontend Engineer specializing in React.js, React Native, TypeScript, and AI-powered web applications.',
    siteName: 'Razi Ahmad Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Razi Ahmad - Full Stack Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Razi Ahmad | Full Stack Engineer',
    description: 'Full Stack Engineer specializing in MERN Stack, Node.js, React.js, Python, and GraphQL.',
    images: ['/og-image.png'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}