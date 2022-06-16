import React, { lazy, Suspense } from 'react'
import LoadingArticle from './LoadingArticle.jsx'
import styles from './newsList.module.css'
const Article = lazy(() => import('./Article.jsx'))

const NewsList = ({ data, isLoading, isError }) => {
  if (isLoading) {
    return <p>Cargando ... </p>
  }

  if (isError) {
    return <p>Ocurrio un error </p>
  }

  if (!data || data?.length === 0) {
    return <p>No hay resultados</p>
  }

  return (
    <div className={styles.newsContent}>
      {data?.map((item, index) => {
        return (
          <Suspense key={index} fallback={<LoadingArticle />}>
            <Article
              title={item.title}
              url={item.url}
              description={item.description}
              author={item.author}
              source={item?.source?.name}
              urlToImage={item.urlToImage}
            />
          </Suspense>
        )
      })}
    </div>
  )
}

export default NewsList
