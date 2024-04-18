'use client'

import { useEffect } from 'react'

import { useRouter, useSearchParams } from 'next/navigation'

import { getGithubToken } from '@/services/github'
import { useQuery } from '@tanstack/react-query'

import { Loader2Icon } from 'lucide-react'

export default function Auth() {
  const router = useRouter()

  const searchParams = useSearchParams()
  const code = searchParams.get('code')

  const { isSuccess } = useQuery({
    queryKey: ['githubToken'],
    queryFn: () => getGithubToken(code as string),
    enabled: !!code,
  })

  useEffect(() => {
    if (isSuccess) {
      router.replace('/')
    }
  }, [isSuccess, router])

  return (
    <div className="flex h-screen min-h-screen flex-col items-center justify-center space-y-4 overflow-hidden bg-gradient-to-br from-green-400 to-blue-500 to-pink-500 to-purple-600 p-8 text-center text-gray-900 dark:text-gray-100 md:px-24 md:py-12">
      <Loader2Icon className="h-8 w-8 animate-spin" />
      <p className="text-lg font-bold">Carregando suas informações...</p>
    </div>
  )
}
