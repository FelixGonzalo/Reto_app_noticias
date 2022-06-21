import { config } from '../../config'

const { API_URL } = config.authARC

export async function logoutUser({ token }) {
  if (!token) return false
  const url = `${API_URL}/auth/token`
  return await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.ok) return true
    return false
  })
}
