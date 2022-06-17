import HeroCard from './HeroCard';
import styles from './hero.module.css'

export function Hero({ data, isloading }) {


  if (isloading)  {
    return (
      <div className={`wrapper ${styles.hero}`}>
        <p>Cargando Imagen ... </p>
      </div>
    )
  } 

  return (
    <div className={styles.hero}>
      {
        data?.length === 0
        ?
        <p>No Disponible</p>
        :
        data?.map((item,i) => {
          return (
            <HeroCard 
              key={i}
              urlToImage={item.urlToImage}
              url={item.url}
              title={item.title}
              description={item.description}
              author={item.author}
              source={item.source.name}
            />
          )
        })
      }
    </div>
  )
}
