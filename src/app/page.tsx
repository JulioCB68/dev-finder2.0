import AsideNav from '@/components/AsideNav'
import Header from '@/components/Header'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <div className="flex rounded-lg bg-gray-100/90 backdrop-blur-lg dark:bg-gray-800/50">
      <AsideNav />
      <div className="h-[55rem] flex-1 overflow-y-scroll px-8">
        <Header />
        <Separator />
        {/* <div className="mt-14">
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
              <div className="h-[30rem] w-full overflow-y-scroll rounded-lg bg-white p-4 shadow">
                <h2 className="mb-4 flex items-center text-lg font-semibold">
                  <Calendar className="mr-2 text-gray-400" />
                  Latest commits
                </h2>
                <LatestCommits />
              </div>
            </div>
          </div>
          <div className="mt-14">
            <h2 className="mb-4 flex items-center text-left text-lg font-bold">
              <CalendarDays className="mr-3" />
              Contributions
            </h2>
            <CalendarChart />
          </div> */}
      </div>
    </div>
  )
}
