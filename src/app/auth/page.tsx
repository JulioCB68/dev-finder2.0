'use client'

import { useQuery } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'

import { getGithubUser } from '@/services/github'
import { parseCookies } from 'nookies'
import { useEffect } from 'react'

export default function Auth() {
  const router = useRouter()

  const user = parseCookies().user

  const searchParams = useSearchParams()
  const code = searchParams.get('code')

  const { data } = useQuery({
    queryKey: ['githubToken'],
    queryFn: () => getGithubUser(code as string),
    retry: false,
    enabled: !!user,
  })

  useEffect(() => {
    setTimeout(() => router.replace('/'), 450)
  })
}
