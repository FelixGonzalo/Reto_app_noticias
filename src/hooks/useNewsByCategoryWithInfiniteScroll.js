import { useEffect, useState } from 'react'
import { getNewsByCategory } from '../services/newsApi/getNewsByCategory'
import debounce from 'just-debounce-it'

export function useNewsByCategoryWithInfiniteScroll({ category, pageSize }) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [isTheEnd, setIsTheEnd] = useState(false)

  const handleOnScroll = debounce(() => {
    if (isTheEnd) return console.log('no more data for infinite scroll')
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 500
    ) {
      setPage(page + 1)
    } // at the end of the page - 500px
  }, 500)

  useEffect(() => {
    getNews()
    window.addEventListener('scroll', handleOnScroll)
    return () => window.removeEventListener('scroll', handleOnScroll)
  }, [page])

  const getNews = () => {
    setLoading(true)
    getNewsByCategory({ category, pageSize, page })
      .then((news) => {
        if (news.length === 0) setIsTheEnd(true)
        setData([...data, ...news])
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        console.error(error)
      })
  }

  return { data, loading, isTheEnd }
}
