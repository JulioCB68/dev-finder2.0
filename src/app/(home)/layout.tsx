import Header from '@/components/header'
import AsideNav from '@/components/sidebar'
import { Separator } from '@/components/ui/separator'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen min-h-screen flex-col items-center justify-center space-y-4 overflow-hidden bg-gradient-to-br from-green-400 to-blue-500 to-pink-500 to-purple-600 p-8 text-center text-gray-900 dark:text-gray-100 md:px-24 md:py-12">
      <div className="flex h-full w-full flex-1 rounded-lg bg-gray-100/90 backdrop-blur-lg dark:bg-gray-800/50">
        <AsideNav />
        <div className="w-full max-w-[130rem] overflow-y-scroll rounded-lg px-8">
          <Header />
          <Separator />
          {children}
        </div>
      </div>
    </div>
  )
}
