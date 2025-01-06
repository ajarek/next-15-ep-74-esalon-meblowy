import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'e-Salon Meblowy',
  description: 'Nowoczesne meble do Twojego domu',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pl'>
      <body className={inter.className}>
        <div className='max-w-7xl mx-auto'>
          <Navbar />
          <Toaster />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
