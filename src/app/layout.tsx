// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shoniz Mahmoud - Full Stack Developer & Software Engineer',
  description: 'Computer Engineering graduate from Cairo, Egypt specializing in full-stack development, mobile applications, and modern web technologies. Expert in React, Next.js, Node.js, Django, React Native, Flutter, and scalable system architecture.',
  keywords: [
    'Shoniz Mahmoud',
    'Software Engineer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'Django Developer',
    'React Native Developer',
    'Flutter Developer',
    'Mobile App Developer',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'Python Developer',
    'Egypt Developer',
    'Cairo Developer',
    'Computer Engineering',
    'Modern Academy',
    'Altamayuz Firm',
    'Portfolio',
    'Freelancer'
  ],
  authors: [{ name: 'Shoniz Mahmoud', url: 'https://shonizmahmoud.com' }],
  creator: 'Shoniz Mahmoud',
  publisher: 'Shoniz Mahmoud',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shoniz.netlify.app',
    title: 'Shoniz Mahmoud - Full Stack Developer & Software Engineer',
    description: 'Computer Engineering graduate from Cairo, Egypt specializing in full-stack development, mobile applications, and modern web technologies. Expert in React, Next.js, Node.js, Django, React Native, Flutter, and scalable system architecture.',
    siteName: 'Shoniz Mahmoud Portfolio',
    images: [
      {
        url: '/Profile_Image.png',
        width: 1200,
        height: 630,
        alt: 'Shoniz Mahmoud - Full Stack Developer & Software Engineer',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shoniz Mahmoud - Full Stack Developer & Software Engineer',
    description: 'Computer Engineering graduate specializing in full-stack development, mobile applications, and modern web technologies.',
    images: ['/Profile_Image.png'],
    creator: '@shonizmahmoud',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#2563eb' },
    ],
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://shoniz.netlify.app'),
  alternates: {
    canonical: 'https://shoniz.netlify.app',
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code
  },
  category: 'Technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}