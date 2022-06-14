import styles from './hero.module.css'
import { useNewsByCategory } from './../../../hooks/useNewsByCategory';
import { newsCategories } from '../../../services/newsApi/getNewsCategories';

export function Hero() {

  const {data,loading } = useNewsByCategory({
    category: newsCategories.technology.category,
    pageSize: 1
  });

  if (loading)  {
    return <div className={`wrapper ${styles.hero}`}><p>Cargando Imagen</p></div>
  }

  return (
    <div className={`wrapper ${styles.hero}`}>
      {
        data?.length === 0
        ?
        <p>No Disponible</p>
        :
        data?.map((item,i) => {
          return (
            <div key={item.title + i} className={styles.hero__image}>
              <img src={item.urlToImage} alt="" />
              <div className={styles.hero__imageDescription}>
                <a href={item.url}>
                  <h3>{item.title}</h3>
                </a>
                <p>{item.description}</p>
                <small>
                    <span>Autor: {item.author}</span>
                    <span>Fuente: {item.source.name}</span>
                </small>
              </div>
              
            </div>
          )
        })
      }
    </div>
  )
}
