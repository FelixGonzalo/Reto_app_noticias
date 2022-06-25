import { useLastSearch } from '../../hooks/utils/useLastSearch'
import Article from '../NewsList/Article'
import styles from './lastsearch.module.css'

const LastSearch = () => {
  const { lastSearch, lastArticles } = useLastSearch()

  if (lastSearch?.length === 0 || !lastArticles) {
    return <p>No se encontraron resultados de la última búsqueda</p>
  }

  return (
    <>
      <br /> <br />
      <h2>Última Búsqueda</h2>
      <h2>| {lastSearch}</h2>
      <div className={styles.lastArticles}>
        {lastArticles?.map((item) => (
          <Article
            key={item.title}
            title={item.title}
            url={item.url}
            description={item.description}
            author={item.author}
            source={item.source}
            urlToImage={item.urlToImage}
          />
        ))}
      </div>
    </>
  )
}

export default LastSearch
