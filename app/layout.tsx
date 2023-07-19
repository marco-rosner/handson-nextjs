import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

interface RootLayout {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'ToDo App',
  description: 'NextJS hands on project made by Marco Rosner',
}

export default function RootLayout({
  children,
}: RootLayout) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
