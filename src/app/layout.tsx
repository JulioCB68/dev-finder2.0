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
        <TanstackProvider>
          <div className="flex h-screen min-h-screen flex-col items-center justify-center space-y-4 overflow-hidden bg-gradient-to-br from-green-400 to-blue-500 to-pink-500 to-purple-600 px-24 py-12 text-center text-gray-900 dark:text-gray-100">
            {children}
          </div>
        </TanstackProvider>
      </body>
    </html>
  )
}
