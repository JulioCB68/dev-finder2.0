export function getClosestRepos(repos: GithubRepo[] | undefined): GithubRepo[] {
  const currentDate = new Date().getTime()

  // Ordenar o array com base na diferença entre as datas
  repos?.sort((a, b) => {
    const dateA = new Date(a.pushed_at).getTime()
    const dateB = new Date(b.pushed_at).getTime()
    const diffA = Math.abs(currentDate - dateA)
    const diffB = Math.abs(currentDate - dateB)
    return diffA - diffB
  })

  // Pegar os 7 primeiros arrays após a ordenação
  const closestArrays = repos?.slice(0, 10)

  return closestArrays || []
}
