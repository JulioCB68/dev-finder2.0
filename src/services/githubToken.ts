import axios from 'axios'
import { setCookie } from 'nookies'

export async function getGithubUser(code: string): Promise<GithubUserData> {
  const responseAccessToken = await axios.post(`/api?code=${code}`)
  const data = await responseAccessToken.data
  const accessToken = data.access_token

  const response = await axios.get('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  setCookie(null, 'user', JSON.stringify(response.data), {
    maxAge: 7 * 24 * 60 * 60,
    path: '/',
  })

  return response.data
}
