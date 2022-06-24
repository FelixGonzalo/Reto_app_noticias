import { useNewsHistory } from '../../hooks/useNewsHistory'
import PropTypes from 'prop-types'
import styles from './newsList.module.css'

const Article = ({
  title,
  url,
  description,
  source = '',
  author = 'No definido',
  urlToImage,
  loadingAsync = false,
  saveToHistoryWhenClicked = false,
}) => {
  const { addNoticiaToUserHistory } = useNewsHistory()

  const handle_addNoticiaToUserHistory = () => {
    if (saveToHistoryWhenClicked) {
      addNoticiaToUserHistory({
        title,
        url,
        description,
        source,
        author,
        urlToImage,
      })
    }
  }

  return (
    <article className={styles.article}>
      <div className={styles.article__description}>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          onClick={handle_addNoticiaToUserHistory}
        >
          <h3 className={styles.title}>{title}</h3>
        </a>
        <p>{description}</p>
        <small>
          <span>Autor: {author}</span>
          <span>Fuente: {source}</span>
        </small>
      </div>
      <a
        className={styles.article__image}
        href={url}
        target="_blank"
        rel="noreferrer"
        onClick={handle_addNoticiaToUserHistory}
      >
        {loadingAsync ? (
          <img
            src={urlToImage}
            alt={title}
            loading="lazy"
            decoding="async"
            width="300px"
            height="250px"
          />
        ) : (
          <img src={urlToImage} alt={title} />
        )}
      </a>
    </article>
  )
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  source: PropTypes.string,
  author: PropTypes.string,
  urlToImage: PropTypes.string.isRequired,
  loadingAsync: PropTypes.bool,
  saveToHistoryWhenClicked: PropTypes.bool,
}

export default Article
