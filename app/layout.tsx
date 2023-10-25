import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/layout/navbar'
import Footer from './components/layout/footer'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#212121] text-black dark:text-white ">
        <Providers>
          <Navbar />
          <div className='container mx-auto min-h-screen py-5'>
            {children}
          </div>
        </Providers>
        <Footer />
      </body>
    </html>
  )
}
