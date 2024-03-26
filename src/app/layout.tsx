import { robotoMono } from '@/config/font'
import { metaData } from '@/config/metadata'
import TanstackProvider from '@/providers/TanStackQuery'
import '@/styles/globals.css'

export const metadata = metaData

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  )
}
