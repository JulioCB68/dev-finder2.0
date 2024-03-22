import AsideNav from '@/components/AsideNav'
import BarChart from '@/components/BarChart'
import CardRepo from '@/components/CardRepo'
import Header from '@/components/Header'
import { Separator } from '@/components/ui/separator'
import { Activity, Pin } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4 bg-gradient-to-br from-green-400 to-blue-500 to-pink-500 to-purple-600 p-8 text-center text-gray-900 dark:text-gray-100">
      <div className="flex rounded-lg bg-gray-100/90 backdrop-blur-lg dark:bg-gray-800/50">
        <AsideNav />
        <div className="h-[55rem] flex-1 overflow-y-scroll px-8">
          <Header />
          <Separator />
          <div className="mt-14">
            <h2 className="mb-4 flex items-center text-left text-lg font-bold">
              <Pin className="mr-3 rotate-45" />
              Most Recent
            </h2>
            <div className="flex flex-wrap gap-4 pt-4">
              <CardRepo />
            </div>
          </div>
          <div className="mt-14">
            <h2 className="mb-4 flex items-center text-left text-lg font-bold">
              <Activity className="mr-3" />
              Activity
            </h2>
            <div className="flex">
              <BarChart />
              <BarChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
