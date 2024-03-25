'use client'

import useGithubRepo from '@/hooks/useGithubRepos'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { getClosestRepos } from '@/utils/getClosestRepos'
import { Book } from 'lucide-react'

export default function CardRepo() {
  const fetchDataGithub = useGithubRepo()
  const repos = getClosestRepos(fetchDataGithub)

  return (
    <>
      {repos.map((item) => (
        <div key={item.id}>
          <Card className="flex h-56 w-96 cursor-pointer flex-col justify-between bg-[#f6f8fa]">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <Book className="mr-3" />
                <CardTitle>{item.name}</CardTitle>
              </div>
              <Badge variant="secondary">{item.visibility}</Badge>
            </CardHeader>
            <CardContent>
              <CardDescription className="line-clamp-4">
                {item.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Badge variant="secondary">{item.forks_count}</Badge>
              <Badge variant="secondary">{item.watchers_count}</Badge>
            </CardFooter>
          </Card>
        </div>
      ))}
    </>
  )
}
