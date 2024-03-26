'use client'

import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import Link from 'next/link'

export default function Login() {
  return (
    <div>
      <h1 className="pb-3 text-4xl font-bold">Login with GitHub</h1>
      <p className="pb-8 text-lg">
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
