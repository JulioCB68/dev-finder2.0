'use client'

import { useQuery } from '@tanstack/react-query'

import { getGithubUser, getGithubUserRepo } from '@/services/github'
import { getClosestRepos } from '@/utils/getClosestRepos'

import Loading from '@/components/loading'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { useMediaQuery } from '@/hooks/use-media-query'
import { Book } from 'lucide-react'

interface IRepositoriesProps {
  data?: GithubRepo[]
}

export default function CardRepo({ data }: IRepositoriesProps) {
  const isWideScreen = useMediaQuery('(min-width: 1536px)')

  const { data: user } = useQuery({
    queryKey: ['githubUser'],
    queryFn: () => getGithubUser(),
  })

  const username = user?.login

  const { data: repo, isLoading } = useQuery({
    queryKey: ['githubRepo', username],
    queryFn: () => getGithubUserRepo(username as string),
    enabled: !!username,
  })

  const repos = getClosestRepos(repo)

  if (isLoading) {
    return Array.from({ length: repos.length }, (_, index) => (
      <Loading key={index} />
    ))
  }

  return (
    <>
      {repos &&
        repos.map((item) => (
          <div key={item.id} className="w-full md:w-auto">
            <Card className="flex min-h-56 w-full cursor-pointer flex-col justify-between bg-[#f6f8fa] md:w-72 2xl:w-96">
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center">
                  <Book className="mr-3" />
                  <CardTitle>{item.name}</CardTitle>
                </div>
                {isWideScreen && (
                  <Badge variant="secondary">{item.visibility}</Badge>
                )}
              </CardHeader>
              <CardContent>
                <CardDescription className="md:line-clamp-2 2xl:line-clamp-4">
                  {item.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Badge variant="secondary">{item.forks_count}</Badge>
                {!isWideScreen && (
                  <Badge variant="secondary">{item.visibility}</Badge>
                )}
                <Badge variant="secondary">{item.watchers_count}</Badge>
              </CardFooter>
            </Card>
          </div>
        ))}

      {data &&
        data.map((item) => (
          <div key={item.id} className="w-full md:w-auto">
            <Card className="flex min-h-56 w-full cursor-pointer flex-col justify-between bg-[#f6f8fa] md:w-72 2xl:w-96">
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center">
                  <Book className="mr-3" />
                  <CardTitle>{item.name}</CardTitle>
                </div>
                {isWideScreen && (
                  <Badge variant="secondary">{item.visibility}</Badge>
                )}
              </CardHeader>
              <CardContent>
                <CardDescription className="md:line-clamp-2 2xl:line-clamp-4">
                  {item.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Badge variant="secondary">{item.forks_count}</Badge>
                {!isWideScreen && (
                  <Badge variant="secondary">{item.visibility}</Badge>
                )}
                <Badge variant="secondary">{item.watchers_count}</Badge>
              </CardFooter>
            </Card>
          </div>
        ))}
    </>
  )
}
