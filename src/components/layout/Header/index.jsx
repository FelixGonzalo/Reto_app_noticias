import { Link } from 'react-router-dom'
import styles from './header.module.css'
import { useCurrentUser } from '../../../hooks/auth/useCurrentUser'
import { useContext } from 'react'
import { SuscriptionContext } from '../../../state/context/suscriptionProvider'

export function Header() {
  const { isUserLoggedIn, currentUser, handleLogout } = useCurrentUser()
  const { currentUserPlan } = useContext(SuscriptionContext)

  return (
    <header className={`wrapper ${styles.header}`}>
      <div className={styles.header__top}>
        <Link to={'/suscripcion'} className={styles.header__btn}>
          {currentUserPlan ? 'Suscripción' : 'Suscríbete'}
        </Link>
        <span className={styles.header__top__line}>|</span>
        {!isUserLoggedIn ? (
          <>
            <Link to={'/register'} className={styles.header__btn}>
              Registrarse
            </Link>
            <span className={styles.header__top__line}>|</span>
            <Link to={'/login'} className={styles.header__btn}>
              Iniciar Sesión
            </Link>
          </>
        ) : (
          <>
            <Link to={'/usuario/perfil'} className={styles.header__btn}>
              {currentUser?.userProfile?.firstName}{' '}
              {currentUser?.userProfile?.lastName}
              {!currentUser?.userProfile?.firstName &&
              !currentUser?.userProfile?.lastName
                ? 'Perfil'
                : null}
            </Link>
            <span className={styles.header__top__line}>|</span>
            <button className={styles.header__btn} onClick={handleLogout}>
              Cerrar Sesión
            </button>
          </>
        )}
      </div>
      <h1 className={styles.header__title}>_ La Portada _</h1>
    </header>
  )
}

export function SimpleHeader() {
  const { isUserLoggedIn, currentUser, handleLogout } = useCurrentUser()
  const { currentUserPlan } = useContext(SuscriptionContext)
  return (
    <header className={`wrapper ${styles.header} ${styles.simpleHeader}`}>
      <div className={styles.header__top}>
        <Link to={'/'} className={styles.header__btn}>
          Home
        </Link>
        <span className={styles.header__top__line}>|</span>
        <Link to={'/suscripcion'} className={styles.header__btn}>
          {currentUserPlan ? 'Suscripción' : 'Suscríbete'}
        </Link>
        <span className={styles.header__top__line}>|</span>
        {!isUserLoggedIn ? (
          <>
            <Link to={'/register'} className={styles.header__btn}>
              Registrarse
            </Link>
            <span className={styles.header__top__line}>|</span>
            <Link to={'/login'} className={styles.header__btn}>
              Iniciar Sesión
            </Link>
          </>
        ) : (
          <>
            <Link to={'/usuario/perfil'} className={styles.header__btn}>
              {currentUser?.userProfile?.firstName}{' '}
              {currentUser?.userProfile?.lastName}
              {!currentUser?.userProfile?.firstName &&
              !currentUser?.userProfile?.lastName
                ? 'Perfil'
                : null}
            </Link>
            <span className={styles.header__top__line}>|</span>
            <button className={styles.header__btn} onClick={handleLogout}>
              Cerrar Sesión
            </button>
          </>
        )}
      </div>
      <h1 className={styles.header__title}>_ La Portada _</h1>
    </header>
  )
}
