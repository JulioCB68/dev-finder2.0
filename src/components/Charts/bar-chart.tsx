'use client'

import { useEffect, useState } from 'react'

import { ResponsiveBar } from '@nivo/bar'

import { useMediaQuery } from '@/hooks/use-media-query'
import { getGithubUser, getGithubUserRepo } from '@/services/github'
import { getLanguagesProfile } from '@/utils/getLanguagesProfile'
import { useQuery } from '@tanstack/react-query'

export default function BarChart() {
  const isWideScreen = useMediaQuery('(min-width: 1536px)')

  const [languageData, setLanguageData] = useState<
    { language: string; value: number }[]
  >([])

  const { data: user } = useQuery({
    queryKey: ['githubUser'],
    queryFn: getGithubUser,
  })

  const username = user?.login

  const { data: repo } = useQuery({
    queryKey: ['githubRepo', username],
    queryFn: () => getGithubUserRepo(username as string),
    enabled: !!username,
  })

  useEffect(() => {
    setLanguageData(getLanguagesProfile(repo))
  }, [repo])

  return (
    <div className="h-[30rem] w-full">
      <h2>Most Used Languages</h2>
      <ResponsiveBar
        data={languageData}
        keys={['value']}
        indexBy="language"
        margin={
          isWideScreen
            ? { top: 50, right: 130, bottom: 50, left: 60 }
            : { top: 50, right: 0, bottom: 50, left: 0 }
        }
        padding={0.3}
        colors={['#2563eb']}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Número de Repositórios',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        animate={true}
        theme={{
          axis: {
            ticks: {
              text: {
                fontSize: '14px',
              },
            },
          },
          labels: {
            text: {
              fontSize: '14px',
            },
          },
        }}
      />
    </div>
  )
}
