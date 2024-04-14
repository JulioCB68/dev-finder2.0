'use client'

import { getGithubToken } from '@/services/github'
import { useQuery } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function Auth() {
  const router = useRouter()

  const searchParams = useSearchParams()
  const code = searchParams.get('code')

  useQuery({
    queryKey: ['githubToken'],
    queryFn: () => getGithubToken(code!),
    retry: false,
  })

  useEffect(() => {
    setTimeout(() => router.replace('/'), 500)
  })
}
