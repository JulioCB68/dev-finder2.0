'use client'

import CardRepo from '@/components/CardRepo'
import useGithubRepo from '@/hooks/useGithubRepos'
import { Book } from 'lucide-react'

export default function Repositories() {
  const fetchDataGithub = useGithubRepo()
  return (
    <div className="mt-10">
      <h2 className="mb-4 flex items-center text-left text-lg font-bold">
        <Book className="mr-3 rotate-45" />
        Repositories
      </h2>
      <div className="flex flex-wrap gap-4 pt-4">
        <CardRepo data={fetchDataGithub!} />
      </div>
    </div>
  )
}
