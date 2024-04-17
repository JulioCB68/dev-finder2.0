import BarChart from '@/components/Charts/bar-chart'
import CalendarChart from '@/components/Charts/calendar-chart'
import CardRepo from '@/components/card-repo'
import LatestCommits from '@/components/latest-commits'
import { Activity, Calendar, CalendarDays, Pin } from 'lucide-react'

export default function Home() {
  return (
    <>
      <div className="mt-4 md:mt-14">
        <h2 className="mb-4 flex items-center text-left text-lg font-bold">
          <Pin className="mr-3 rotate-45" />
          Most Recent
        </h2>
        <div className="flex flex-wrap gap-3 pt-4">
          <CardRepo />
        </div>
      </div>
      <div className="mt-14">
        <h2 className="mb-4 flex items-center text-left text-lg font-bold">
          <Activity className="mr-3" />
          Activity
        </h2>
        <div className="flex w-full flex-col 2xl:flex-row">
          <BarChart />
          <div className="mt-10 h-[30rem] w-full overflow-y-scroll rounded-lg bg-white p-4 shadow">
            <h2 className="mb-4 flex items-center text-lg font-semibold">
              <Calendar className="mr-2 text-gray-400" />
              Latest commits
            </h2>
            <LatestCommits />
          </div>
        </div>
      </div>
      <div className="mt-14">
        <h2 className="flex items-center text-left text-lg font-bold">
          <CalendarDays className="mr-3" />
          Contributions
        </h2>
        <CalendarChart />
      </div>
    </>
  )
}
