import { config } from '../../config'

const { API_URL } = config.authARC

export async function login({ email, password }) {
  const url = `${API_URL}/auth/login`
  return await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userName: email,
      credentials: password,
      grantType: 'password',
      rememberMe: true,
    }),
  }).then((res) => res.json())
}
