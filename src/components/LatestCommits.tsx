'use client'

import { useEffect, useState } from 'react'

import useGithubEvents from '@/hooks/useGithubEvents'
import { formatDate } from '@/utils/formatDate'

export default function LatestCommits() {
  const [commit, setCommit] = useState<GithubEvents[] | undefined>([])

  const events = useGithubEvents()

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
