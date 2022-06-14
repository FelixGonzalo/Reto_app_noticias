import { Link } from 'react-router-dom'
import styles from './header.module.css'

export function Header() {
  return (
    <header className={`wrapper ${styles.header}`}>
      <div className={styles.header__top}>
        <Link to={'/register'} className={styles.header__btn}>
          Registrarse
        </Link>
        <span className={styles.header__top__line}>|</span>
        <Link to={'/login'} className={styles.header__btn}>
          Iniciar Sesión
        </Link>
      </div>
      <h1 className={styles.header__title}>_ La Portada _</h1>
    </header>
  )
}

export function SimpleHeader() {
  return (
    <header className={`wrapper ${styles.header} ${styles.simpleHeader}`}>
      <div className={styles.header__top}>
        <Link to={'/register'} className={styles.header__btn}>
          Registrarse
        </Link>
        <span className={styles.header__top__line}>|</span>
        <Link to={'/login'} className={styles.header__btn}>
          Iniciar Sesión
        </Link>
      </div>
      <h1 className={styles.header__title}>_ La Portada _</h1>
    </header>
  )
}
