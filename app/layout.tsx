import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Praful Chikhle | Senior Frontend Engineer',
  description: 'Praful Chikhle Portfolio - Senior Frontend Engineer and Technical Lead specializing in Angular, TypeScript, and modern web development.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
