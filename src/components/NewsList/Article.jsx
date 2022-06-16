import styles from './newsList.module.css'

const Article = ({ title, url, description, source, author, urlToImage }) => {
  return (
    <article className={styles.article}>
      <div className={styles.article__description}>
        <a href={url} target="_blank" rel="noreferrer">
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
      >
        <img src={urlToImage} alt={title} loading="lazy" />
      </a>
    </article>
  )
}

export default Article
