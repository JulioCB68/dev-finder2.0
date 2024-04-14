'use client'

import { useEffect, useState } from 'react'

import { ResponsiveCalendar } from '@nivo/calendar'

import { getGithubUser, getGithubUserEvents } from '@/services/github'
import { useQuery } from '@tanstack/react-query'

interface Contribution {
  day: string
  value: number
}

export default function CalendarChart() {
  const [contributions, setContributions] = useState<Contribution[]>([])

  const { data: user } = useQuery({
    queryKey: ['githubUser'],
    queryFn: getGithubUser,
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 3600000,
  })

  const username = user?.login

  const { data } = useQuery({
    queryKey: ['githubEvents', username],
    queryFn: () => getGithubUserEvents(username ?? ''),
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 3600000,
    enabled: !!username,
  })

  useEffect(() => {
    // Filter events relevant to contributions
    const contributionEvents = data?.filter((event: GithubEvents) =>
      [
        'PushEvent',
        'PullRequestEvent',
        'IssuesEvent',
        'CreateEvent',
        'WatchEvent',
      ].includes(event.type),
    )
    // Process data to aggregate contributions per day
    const contributionsData: { [day: string]: number } = {}
    contributionEvents?.forEach((event: GithubEvents) => {
      const date = event.created_at.substring(0, 10)
      contributionsData[date] = (contributionsData[date] || 0) + 1
    })

    // Create contributions array for rendering
    const formattedData = Object.entries(contributionsData).map(
      ([day, count]) => ({
        day,
        value: count,
      }),
    )

    setContributions(formattedData)
  }, [data])

  return (
    <div className="h-[23rem] w-full">
      <ResponsiveCalendar
        data={contributions}
        from={contributions.length > 0 ? contributions[0].day : ''}
        to={
          contributions.length > 0
            ? contributions[contributions.length - 1].day
            : ''
        }
        emptyColor="#ebedf0"
        colors={['#9be9a8', '#40c463', '#30a14e', '#216e39']}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'row',
            translateY: 36,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: 'right-to-left',
          },
        ]}
      />
    </div>
  )
}
