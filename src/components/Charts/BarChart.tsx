'use client'

import { useEffect, useState } from 'react'

import { ResponsiveBar } from '@nivo/bar'

import { getLanguagesProfile } from '@/utils/getLanguagesProfile'
import useGitHubData from '../../hooks/useGithubRepos'

export default function BarChart() {
  const [languageData, setLanguageData] = useState<
    { language: string; value: number }[]
  >([])

  const fetchDataGithub = useGitHubData()

  useEffect(() => {
    setLanguageData(getLanguagesProfile(fetchDataGithub))
  }, [fetchDataGithub])

  return (
    <div className="h-[30rem] w-full">
      <h2>Linguagens Mais Utilizadas</h2>
      <ResponsiveBar
        data={languageData}
        keys={['value']}
        indexBy="language"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
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
