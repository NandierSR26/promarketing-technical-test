
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer, Header } from '@/library/components'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Promarketing - Prueba tecnica',
  description: 'Prueba Tecnica para puesto de desarrollador front-end',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
          <div className="flex flex-col bg-[#5757574d] backdrop-blur-2xl min-h-screen px-10">
            <Header />
            {children}
            <Footer />
          </div>

      </body>
    </html>
  )
}
