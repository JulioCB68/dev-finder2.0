'use client'

import CardRepo from '@/components/card-repo'

import { getGithubUser, getGithubUserRepo } from '@/services/github'
import { useQuery } from '@tanstack/react-query'
import { Book } from 'lucide-react'

export default function Repositories() {
  const { data: user } = useQuery({
    queryKey: ['githubUser'],
    queryFn: getGithubUser,
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 3600000,
  })

  const username = user?.login

  const { data: repos } = useQuery({
    queryKey: ['githubRepo', username],
    queryFn: () => getGithubUserRepo(username ?? ''),
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 3600000,
    enabled: !!username,
  })

  return (
    <div className="mt-10">
      <h2 className="mb-4 flex items-center text-left text-lg font-bold">
        <Book className="mr-3 rotate-45" />
        Repositories
      </h2>
      <div className="flex flex-wrap gap-4 pt-4">
        <CardRepo data={repos} />
      </div>
    </div>
  )
}
