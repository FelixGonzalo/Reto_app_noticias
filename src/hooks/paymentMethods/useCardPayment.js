import { useState } from 'react'
import { payWithCard } from '../../services/cardPayment'

export function useCardPayment() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [errorInfo, setErrorInfo] = useState('')
  const [data, setData] = useState(null)

  const handleCardPayment = async ({
    name,
    cardNumber,
    expirationDate,
    CVV,
  }) => {
    setLoading(true)
    setError(false)
    setErrorInfo(false)
    return payWithCard({ name, cardNumber, expirationDate, CVV })
      .then((res) => {
        setData(res)
        setLoading(false)
        return true
      })
      .catch((error) => {
        setLoading(false)
        setError(true)
        setErrorInfo(error.message)
      })
  }
  return { handleCardPayment, loading, error, errorInfo, data }
}
