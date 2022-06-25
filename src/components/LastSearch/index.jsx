import { Link } from 'react-router-dom'
import { useLastSearch } from '../../hooks/utils/useLastSearch'
import styles from './lastsearch.module.css'

const LastSearch = ({ showMessageNoData = false }) => {
  const { lastSearch, lastArticles } = useLastSearch()

  if (
    !lastSearch ||
    lastSearch?.length === 0 ||
    !lastArticles ||
    lastArticles?.length === 0
  ) {
    if (showMessageNoData) {
      return <p>No se encontraron resultados de la última búsqueda</p>
    }
    return null
  }

  return (
    <div className={styles.lastSearch}>
      <h2>Última Búsqueda</h2>
      <Link to={`/noticias/search/${lastSearch}`}>
        <h2>| {lastSearch}</h2>
      </Link>
      <div className={styles.lastArticles}>
        {lastArticles?.map((item, index) => (
          <article key={item.title + index}>
            <a href={item.url} target="_blank" rel="noreferrer">
              <img src={item.urlToImage} alt={item.title} />
            </a>
            <a href={item.url} target="_blank" rel="noreferrer">
              <h2>{item.title}</h2>
            </a>
            <small>
              <span>Author: {item.author}</span>
              <span>Fuente: {item.source}</span>
            </small>
          </article>
        ))}
      </div>
    </div>
  )
}

export default LastSearch
