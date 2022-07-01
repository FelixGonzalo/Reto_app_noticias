import { useEffect } from 'react'
import { SimpleHeader } from '../../components/layout/Header'
import NewsList from '../../components/NewsList/NewsList'
import { useNewsHistory } from '../../hooks/useNewsHistory'

export function NewsHistory() {
  const { newsHistory, loading, getNewsHistory } = useNewsHistory()

  useEffect(() => {
    getNewsHistory()
    //eslint-disable-next-line
  }, [])

  return (
    <main className="wrapper">
      <SimpleHeader />
      <h2>Historial de noticias</h2>
      <p>Las 10 últimas noticias que leíste</p>
      {<NewsList data={newsHistory} isloading={loading} />}
    </main>
  )
}
