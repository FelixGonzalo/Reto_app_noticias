import { useState } from 'react'
import { registerUser } from '../../services/authARC/registerUser'

export function useRegisterUser() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [errorInfo, setErrorInfo] = useState(null)

  const handleRegisterUser = async ({
    firstName,
    lastName,
    secondLastName,
    email,
    password,
    phone = '',
  }) => {
    try {
      setLoading(true)
      setError(false)
      setErrorInfo(null)
      const res = await registerUser({
        firstName,
        lastName,
        secondLastName,
        email,
        password,
        phone,
        deviceOrigin: 'unknown',
      })
      setLoading(false)
      if (!res.hasOwnProperty('uuid')) {
        localStorage.removeItem('userToken')
        localStorage.removeItem('userProfile')
        setError(true)
        setErrorInfo(res)
        return null
      }
      localStorage.setItem(
        'userToken',
        JSON.stringify({
          accesToken: res.accessToken,
          refreshToken: res.refreshToken,
        })
      )
      localStorage.setItem('userProfile', JSON.stringify(res.profile))
      return res
    } catch (error) {
      setLoading(false)
      setError(true)
      setErrorInfo(null)
      console.error(error)
    }
  }

  return { handleRegisterUser, loading, error, errorInfo }
}
