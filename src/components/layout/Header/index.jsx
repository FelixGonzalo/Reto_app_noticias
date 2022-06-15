import { Link } from 'react-router-dom'
import styles from './header.module.css'
import { useCurrentUser } from '../../../hooks/auth/useCurrentUser'

export function Header() {
  const { isUserLoggedIn, currentUser, handleLogout } = useCurrentUser()

  return (
    <header className={`wrapper ${styles.header}`}>
      {!isUserLoggedIn ? (
        <div className={styles.header__top}>
          <Link to={'/register'} className={styles.header__btn}>
            Registrarse
          </Link>
          <span className={styles.header__top__line}>|</span>
          <Link to={'/login'} className={styles.header__btn}>
            Iniciar Sesión
          </Link>
        </div>
      ) : (
        <div className={styles.header__top}>
          <Link to={'/usuario/perfil'} className={styles.header__btn}>
            {currentUser?.userProfile?.firstName}{' '}
            {currentUser?.userProfile?.lastName}
          </Link>
          <span className={styles.header__top__line}>|</span>
          <button className={styles.header__btn} onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      )}
      <h1 className={styles.header__title}>_ La Portada _</h1>
    </header>
  )
}

export function SimpleHeader() {
  const { isUserLoggedIn, currentUser, handleLogout } = useCurrentUser()
  return (
    <header className={`wrapper ${styles.header} ${styles.simpleHeader}`}>
      {!isUserLoggedIn ? (
        <div className={styles.header__top}>
          <Link to={'/register'} className={styles.header__btn}>
            Registrarse
          </Link>
          <span className={styles.header__top__line}>|</span>
          <Link to={'/login'} className={styles.header__btn}>
            Iniciar Sesión
          </Link>
        </div>
      ) : (
        <div className={styles.header__top}>
          <Link to={'/'} className={styles.header__btn}>
            Home
          </Link>
          <span className={styles.header__top__line}>|</span>
          <Link to={'/usuario/perfil'} className={styles.header__btn}>
            {currentUser?.userProfile?.firstName}{' '}
            {currentUser?.userProfile?.lastName}
          </Link>
          <span className={styles.header__top__line}>|</span>
          <button className={styles.header__btn} onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      )}
      <h1 className={styles.header__title}>_ La Portada _</h1>
    </header>
  )
}
