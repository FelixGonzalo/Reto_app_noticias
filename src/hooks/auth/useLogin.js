import { useState } from 'react'
import { login } from '../../services/authARC/login'

export function useLogin() {
  // const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleLogin = async ({ email, password }) => {
    try {
      setLoading(true)
      setError(false)

      const res = await login({ email, password })
      setLoading(false)
      if (!res.hasOwnProperty('accessToken')) {
        localStorage.removeItem('userToken')
        setError(true)
        return null
      }
      localStorage.setItem('userToken', JSON.stringify(res))
      return res
    } catch (error) {
      setLoading(false)
      setError(true)
      console.error(error)
    }
  }

  return { handleLogin, loading, error }
}
