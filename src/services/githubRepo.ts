import { api } from './api'

export async function getGithubUserRepo(
  username: string,
): Promise<GithubRepo[]> {
  const response = await api.get(`/users/${username}/repos`)
  return response.data
}
