'use client'

import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import Link from 'next/link'

export default function Login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4 bg-gradient-to-br from-green-400 to-blue-500 to-pink-500 to-purple-600 text-center text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold">Login with GitHub</h1>
      <p className="text-lg">
        Search for your friends and explore the community
      </p>
      <Button asChild>
        <Link
          href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
        >
          <Github className="mr-2 h-6 w-6" /> Login with GitHub
        </Link>
      </Button>
    </div>
  )
}
