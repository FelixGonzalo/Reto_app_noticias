import { useState } from 'react'
import { sendEmailToVerifyEmail } from '../../services/authARC/sendEmailToVerifyEmail'

export function useSendEmailToVerifyEmail() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  const handleSendEmailToVerifyEmail = async ({ email }) => {
    try {
      setLoading(true)
      setMessage(null)
      const res = await sendEmailToVerifyEmail({ email })
      setLoading(false)
      if (!res) {
        setMessage('Correo ya verificado')
        return false
      }
      setMessage('Correo enviado')
      return true
    } catch (error) {
      setLoading(false)
      setMessage('Se ha producido un error.')
      console.error(error)
    }
  }

  return { handleSendEmailToVerifyEmail, loading, message }
}
