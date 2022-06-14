import { useEffect, useState } from 'react'
import { getNewsByCategory } from '../services/newsApi/getNewsByCategory'

export function useNewsByCategory({ category, pageSize }) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    setLoading(true)
    getNewsByCategory({ category, pageSize })
      .then((news) => {
        setData(news)
        console.log(news)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        console.error(error)
      })
  }, [])

  return { loading, data }
}
