import { useEffect, useState } from 'react'
import { getNewsByCategory } from '../services/newsApi/getNewsByCategory'

export function useNewsByCategory({ category, pageSize, page }) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    setLoading(true)
    getNewsByCategory({ category, pageSize, page })
      .then((news) => {
        setData(news)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        console.error(error)
      })
  }, [category, pageSize, page])

  return { loading, data }
}
