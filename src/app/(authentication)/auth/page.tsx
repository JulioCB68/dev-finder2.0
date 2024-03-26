'use client'

import { useQuery } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'

import { getGithubUser } from '@/services/github'
import { useEffect } from 'react'

export default function Auth() {
  const router = useRouter()

  const searchParams = useSearchParams()
  const code = searchParams.get('code')

  const { data } = useQuery({
    queryKey: ['githubToken'],
    queryFn: () => getGithubUser(code as string),
    retry: false,
  })

  useEffect(() => {
    setTimeout(() => router.replace('/'), 500)
  })
}
