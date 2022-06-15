import { config } from '../../config'

const { API_URL } = config.authARC

export async function getUserProfile({ token }) {
  const url = `${API_URL}/profile`
  return await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json())
}
