import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs';
import Providers from './providers';
import Navbar from '@/components/Navbar';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Omniswift',
  description: 'Application test',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <html lang='en' suppressHydrationWarning>
        <body className={inter.className}>
          <Providers>
            <Navbar/>
            {children}
            </Providers>
        </body>

    </html>
  )
}
