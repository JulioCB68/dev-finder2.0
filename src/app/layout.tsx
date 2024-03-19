import SessionWrapper from '@/components/SessionWrapper'
import { robotoMono } from '@/config/font'
import { metaData } from '@/config/metadata'
import '@/styles/globals.css'

export const metadata = metaData

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={robotoMono.className}>{children}</body>
      </html>
    </SessionWrapper>
  )
}
