export function getLanguagesProfile(repos: GithubRepo[] | undefined) {
  const languageCount: { [key: string]: number } = {}
  repos?.forEach((repo: GithubRepo) => {
    const language = repo.language
    if (language) {
      if (languageCount[language]) {
        languageCount[language]++
      } else {
        languageCount[language] = 1
      }
    }
  })

  // Converte o objeto de contagem em um array de objetos
  const languageArray = Object.keys(languageCount).map((language) => ({
    language,
    value: languageCount[language],
  }))

  // Ordena as linguagens por valor (quantidade de repositórios)
  languageArray.sort((a, b) => b.value - a.value)

  const data = languageArray.slice(0, 5)

  return data
}
