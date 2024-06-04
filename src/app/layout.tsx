import './globals.css'
import './global.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beatrice Hoang',
  description: 'Beatrice Hoang Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
