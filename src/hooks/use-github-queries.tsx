'use client'

import { useQuery } from '@tanstack/react-query'

import {
  getGithubUser,
  getGithubUserEvents,
  getGithubUserRepo,
} from '@/services/github'

export default function useGithubQueries() {
  function useGithubUser() {
    const { data, isLoading } = useQuery({
      queryKey: ['githubUser'],
      queryFn: getGithubUser,
    })
    return { data, isLoading }
  }

  function useGithubRepos(username: string) {
    const { data, isLoading } = useQuery({
      queryKey: ['githubRepo'],
      queryFn: () => getGithubUserRepo(username),
    })
    return { data, isLoading }
  }

  function useGithubEvents(username: string) {
    const { data, isLoading } = useQuery({
      queryKey: ['githubEvents'],
      queryFn: () => getGithubUserEvents(username),
    })
    return { data, isLoading }
  }

  return { getGithubUser, getGithubUserRepo, getGithubUserEvents }
}
