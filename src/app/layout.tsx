import { MainLayout } from '@/components/layout/main'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cargo App',
  description: 'Some description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta
          http-equiv="Content-Security-Policy"
          content="frame-ancestors 'self' http://34.89.184.248"
        />
        <meta http-equiv="X-Frame-Options" content="ALLOW-FROM http://34.89.184.248" />
      </head>
      <body className={inter.className}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  )
}
