import { useState } from 'react'
import { updatePassword } from '../../services/authARC/updatePassword'

export function useUpdatePassword() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState(null)
  const [success, setSuccess] = useState(false)

  let token = localStorage.getItem('userToken');
  token = (JSON.parse(token));
  token = token?.accessToken;
  
  const handleUpdatePassword = async ({ oldPassword, newPassword }) => {
		setLoading(true)
		setError(false)
    setMessage(null)
    setSuccess(false)
    try {
      const res = await updatePassword({ token, oldPassword, newPassword })
      setLoading(false)
      if (res.message){
        setMessage(res.message)
      }else {
        setSuccess(true);
      }
      
    } catch (error) {
      setLoading(false)
      setError(true)
      console.error(error)
    }

  }

  return { handleUpdatePassword, loading, error, message, success}
}
