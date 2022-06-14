import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import NewsList from '../../components/NewList/NewsList'
import styles from './news.module.css'

const News = () => {
  const [page, setPage] = useState(1)

  const search = 'actualidad'
  const apiKey = 'cf79decbd27746eeb6e06fe3341b2459'
  const url = `https://newsapi.org/v2/everything?qInTitle=${search}&page=${page}&language=es&apiKey=${apiKey}`

  const { data, isloading, isError } = useFetch(url)

  return (
    <>
      <main className="wrapper">
        <div className={styles.titleNews}>
          <h2>Noticias</h2>
          <p>Búsquedas por "{search}"</p>
          <p>Página {page}</p>
        </div>
        <NewsList
          data={data?.articles}
          isloading={isloading}
          isError={isError}
        />
      </main>
    </>
  )
}

export default News
