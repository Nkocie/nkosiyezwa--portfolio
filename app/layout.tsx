import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const siteUrl = 'https://nkosiyezwa-mpanza.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Nkosiyezwa Mpanza | Software Engineer',
  description:
    'Software Engineer focused on Python, Django, REST APIs, PostgreSQL and secure backend application development.',
  generator: 'v0.app',
  keywords: [
    'Nkosiyezwa Mpanza',
    'Software Engineer',
    'Backend Engineer',
    'Python',
    'Django',
    'REST APIs',
    'PostgreSQL',
    'South Africa',
  ],
  authors: [{ name: 'Nkosiyezwa Malibongwe Mpanza' }],
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Nkosiyezwa Mpanza | Software Engineer',
    description:
      'Backend-focused Software Engineer building reliable and secure backend systems with Python, Django, REST APIs and PostgreSQL.',
    siteName: 'Nkosiyezwa Mpanza',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nkosiyezwa Mpanza | Software Engineer',
    description:
      'Backend-focused Software Engineer building reliable and secure backend systems with Python, Django, REST APIs and PostgreSQL.',
  },
  icons: {
    icon: '/icon.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0f0e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark bg-background ${geistSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
