import { config } from '../../config'

const { API_URL } = config.authARC

export async function sendEmailToVerifyEmail({ email }) {
  if (!email) return false
  const url = `${API_URL}/email/verify`
  return await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
    }),
  }).then((res) => {
    if (res.ok) return true
    return false
  })
}
