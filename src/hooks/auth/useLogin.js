import { useState } from 'react'
import { login } from '../../services/authARC/login'

export function useLogin() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [errorInfo, setErrorInfo] = useState(null)

  const handleLogin = async ({ email, password }) => {
    try {
      setLoading(true)
      setError(false)
      setErrorInfo(null)
      const res = await login({ email, password })
      setLoading(false)
      if (!res.hasOwnProperty('accessToken')) {
        localStorage.removeItem('userToken')
        setError(true)
        setErrorInfo(res)
        return null
      }
      localStorage.setItem('userToken', JSON.stringify(res))
      return res
    } catch (error) {
      setLoading(false)
      setError(true)

      setErrorInfo(null)
      console.error(error)
    }
  }

  return { handleLogin, loading, error, errorInfo }
}
