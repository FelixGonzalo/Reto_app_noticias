import { Link } from 'react-router-dom'
import styles from './notAuthorized.module.css'

const NotAuthorized = () => {
  return (
    <div className={styles.notAuthorized__container}>
      <img src="/assets/images/notAuthorized.svg" alt="not Authorized" />
      <h2>PÁGINA PRIVADA</h2>
      <p>Necesitas iniciar sesión!</p>
      <Link to="/login">Iniciar sesión</Link>
    </div>
  )
}

export default NotAuthorized
