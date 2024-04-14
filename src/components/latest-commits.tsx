'use client'

import { useEffect, useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import { getGithubUser, getGithubUserEvents } from '@/services/github'
import { formatDate } from '@/utils/formatDate'

export default function LatestCommits() {
  const { data: user } = useQuery({
    queryKey: ['githubUser'],
    queryFn: getGithubUser,
  })

  const username = user?.login

  const { data: events } = useQuery({
    queryKey: ['githubEvents', username],
    queryFn: () => getGithubUserEvents(username as string),
    enabled: !!username,
  })

  const [commit, setCommit] = useState<GithubEvents[] | undefined>([])

  useEffect(() => {
    const commits = events?.filter(
      (event: { type: string }) => event.type === 'PushEvent',
    )
    setCommit(commits)
  }, [events])

  return (
    <>
      {commit?.map((item) => (
        <ul key={item.id} className="space-y-2">
          <li className="my-2">
            <div className="rounded bg-gray-100 p-3 text-left">
              <p className="text-sm text-gray-600">
                {formatDate(item.created_at)}
              </p>

              {item.payload.commits.map((item, index) => (
                <p key={index} className="font-semibold">
                  {item.message}
                </p>
              ))}
            </div>
          </li>
        </ul>
      ))}
    </>
  )
}
