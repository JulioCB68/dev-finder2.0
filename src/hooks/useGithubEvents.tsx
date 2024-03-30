'use client'

import { useEffect, useMemo, useState } from 'react'

import { useQuery } from '@tanstack/react-query'
import { parseCookies } from 'nookies'

import { getGithubUserEvents } from '@/services/github'

export default function useGithubEvents() {
  const user: GithubUser = JSON.parse(parseCookies().user)

  const [events, setEvents] = useState<GithubEvents[]>()

  const { data } = useQuery({
    queryKey: ['githubEvents'],
    queryFn: () => getGithubUserEvents(user.login),
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 3600000,
  })

  useEffect(() => {
    if (data) {
      setEvents(data)
    }
  }, [data])

  const memoizedRepoData = useMemo(() => events, [events])

  return memoizedRepoData
}
