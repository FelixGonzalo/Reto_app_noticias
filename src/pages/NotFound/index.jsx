import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import styles from './notFound.module.css'

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Página no encontrada | La Portada</title>
        <meta
          name="description"
          content="Página no encontrada en La Portada."
        />
      </Helmet>
      <div className={styles.notFound__container}>
        <img src="/assets/images/404.svg" alt="404" />
        <h2>PÁGINA NO ENCONTRADA</h2>
        <p>La página que estas visitando no existe o ha ocurrido un error!</p>
        <Link to="/">Volver a inicio</Link>
      </div>
    </>
  )
}

export default NotFound
