'use client'

import { getGithubUserRepo } from '@/services/github'
import { useQuery } from '@tanstack/react-query'
import { parseCookies } from 'nookies'
import { useEffect, useMemo, useState } from 'react'

export default function useGithubRepo() {
  const user: GithubUser = JSON.parse(parseCookies().user)

  const [repoData, setRepoData] = useState<GithubRepo[]>()

  const { data: repo } = useQuery({
    queryKey: ['githubRepos'],
    queryFn: () => getGithubUserRepo(user.login),
    retry: false,
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    if (repo) {
      setRepoData(repo)
    }
  }, [repo])

  const memoizedRepoData = useMemo(() => repoData, [repoData])

  return memoizedRepoData
}
