import React, { lazy, Suspense } from 'react'
import { useLastSearch } from '../../hooks/utils/useLastSearch.js'
import LoadingArticle from './LoadingArticle.jsx'
import styles from './newsList.module.css'
import PropTypes from 'prop-types'
const Article = lazy(() => import('./Article.jsx'))

const NewsList = ({
  data,
  isLoading,
  isError,
  isPageSearch,
  loadingAsync = false,
  saveToHistoryWhenClicked = false,
}) => {
  const { saveLastArticles } = useLastSearch()

  if (isLoading) {
    return <p>Cargando ... </p>
  }

  if (isError) {
    return <p>Ocurrio un error </p>
  }

  if (!data || data?.length === 0) {
    return <p>No hay resultados</p>
  }

  if (isPageSearch) {
    const lastArticles = []

    data?.map((item, index) =>
      index < 6
        ? lastArticles.push({
            title: item.title,
            url: item.url,
            description: item.description,
            author: item.author,
            source: item?.source?.name,
            urlToImage: item.urlToImage,
          })
        : ''
    )
    saveLastArticles(lastArticles)
  }

  return (
    <>
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
                loadingAsync={loadingAsync}
                saveToHistoryWhenClicked={saveToHistoryWhenClicked}
              />
            </Suspense>
          )
        })}
      </div>
    </>
  )
}

NewsList.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  isPageSearch:  PropTypes.bool,
  loadingAsync:  PropTypes.bool,
  saveToHistoryWhenClicked: PropTypes.bool,
}

export default NewsList
