'use client'

import { parseCookies } from 'nookies'

import { getGithubUserRepo } from '@/services/githubRepo'
import { useQuery } from '@tanstack/react-query'

import BarChart from '@/components/BarChart'
import CardRepo from '@/components/CardRepo'
import Header from '@/components/Header'
import { Separator } from '@/components/ui/separator'

import AsideNav from '@/components/AsideNav'
import { Pin } from 'lucide-react'

export default function Home() {
  const user: GithubUser = JSON.parse(parseCookies().user)

  const { data: repo } = useQuery({
    queryKey: ['githubRepos'],
    queryFn: () => getGithubUserRepo(user.login),
    retry: false,
  })

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
              Pinned Repository
            </h2>
            <div className="flex flex-wrap gap-4 pt-4">
              {repo
                ?.slice(0, 7)
                .map((repo) => (
                  <CardRepo
                    key={repo.id}
                    id={repo.id}
                    name={repo.name}
                    description={repo.description}
                    visibility={repo.visibility}
                    forksCount={repo.forks_count}
                    watchersCount={repo.watchers_count}
                  />
                ))}
            </div>
          </div>
          <div className="mt-14">
            <h2 className="mb-4 text-lg font-bold">Activity</h2>
            <BarChart className="h-[20rem] w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
