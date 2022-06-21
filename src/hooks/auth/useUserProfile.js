import { useState } from 'react'
import { getUserProfile } from '../../services/authARC/getUserProfile'

export function useUserProfile() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [errorInfo, setErrorInfo] = useState(null)

  const handleUserProfile = async ({ token }) => {
    try {
      setLoading(true)
      setError(false)
      setErrorInfo(null)
      const res = await getUserProfile({ token })
      setLoading(false)
      if (!res.hasOwnProperty('email')) {
        // localStorage.removeItem('userProfile')
        setError(true)
        setErrorInfo(res)
        return null
      }
      localStorage.setItem('userProfile', JSON.stringify(res))
      return res
    } catch (error) {
      setLoading(false)
      setError(true)
      setErrorInfo(null)
      console.error(error)
    }
  }

  return { handleUserProfile, loading, error, errorInfo }
}
