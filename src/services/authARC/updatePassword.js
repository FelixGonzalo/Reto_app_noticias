import { config } from '../../config'

const { API_URL } = config.authARC

export async function updatePassword({ token, oldPassword, newPassword }) {
  const url = `${API_URL}/password`
  return await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      oldPassword,
      newPassword
    }),
  }).then((res) => res.json())
}
