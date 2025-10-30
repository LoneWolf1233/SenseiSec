import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/nav'

export const metadata: Metadata = {
  title: 'SenseiSec - Όλα για την κυβερνοασφάλεια',
  description: 'Άρθρα και εργαλεία για την κυβερνοασφάλεια',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
        <Nav />
        {children}
      </body>
    </html>
  )
}





