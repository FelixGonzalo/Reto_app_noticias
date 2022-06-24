import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import styles from './notAuthorized.module.css'

const NotAuthorized = () => {
  return (
    <>
      <Helmet>
        <title>Página no autorizada | La Portada</title>
        <meta
          name="description"
          content="Página privada. Necesitas iniciar sesión en La Portada."
        />
      </Helmet>
      <div className={styles.notAuthorized__container}>
        <img
          src="/assets/images/notAuthorized.svg"
          alt="not Authorized"
          width="300px"
          height="300px"
        />
        <h2>PÁGINA PRIVADA</h2>
        <p>Necesitas iniciar sesión!</p>
        <Link to="/login">Iniciar sesión</Link>
      </div>
    </>
  )
}

export default NotAuthorized
