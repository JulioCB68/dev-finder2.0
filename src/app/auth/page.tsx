'use client'

import { useQuery } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'

import { getGithubUser } from '@/services/github'

export default function Auth() {
  const searchParams = useSearchParams()
  const code = searchParams.get('code')

  const { data: user } = useQuery({
    queryKey: ['githubToken'],
    queryFn: () => getGithubUser(code as string),
    retry: false,
  })

  const router = useRouter()

  router.replace('/')
}
