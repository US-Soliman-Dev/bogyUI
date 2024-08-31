// import './globals.css'
import ThemeProvider from "@/context/ThemeContext";
import ControllerBar from "@/components/ControllerBar";
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import '@/app/globals.css'
import ColorsProvider from "@/context/ColorsContext";
// const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Bogy UI',
  description: 'Best style with Easy UI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
          <ColorsProvider>
            <ControllerBar />
          </ColorsProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
