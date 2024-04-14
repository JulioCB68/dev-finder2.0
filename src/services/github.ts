import axios from 'axios'
import { parseCookies, setCookie } from 'nookies'
import { api } from './api'

export async function getGithubToken(code: string): Promise<GithubUser> {
  const responseAccessToken = await axios.post(`/api?code=${code}`)
  const data = await responseAccessToken.data
  const accessToken = data.access_token

  const response = await axios.get('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  setCookie(null, 'next-auth_github-code', accessToken, {
    maxAge: 7 * 24 * 60 * 60,
    path: '/',
  })

  return response.data
}

export async function getGithubUser(): Promise<GithubUser> {
  const cookies = parseCookies()
  const accessToken = cookies['next-auth_github-code']

  const response = await axios.get('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  return response.data
}

export async function getGithubUserRepo(
  username: string,
): Promise<GithubRepo[]> {
  const response = await api.get(`/users/${username}/repos`)
  return response.data
}

export async function getGithubUserEvents(
  username: string,
): Promise<GithubEvents[]> {
  const response = await api.get(`/users/${username}/events`)
  return response.data
}
