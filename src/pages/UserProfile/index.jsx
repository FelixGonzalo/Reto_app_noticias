import { SimpleHeader } from '../../components/layout/Header'
import { useCurrentUser } from '../../hooks/auth/useCurrentUser'
import styles from './userProfile.module.css'

export function UserProfile() {
  const { currentUser, handleLogout } = useCurrentUser()
  return (
    <>
      <SimpleHeader />
      <main className="wrapper">
        <div className={styles.userProfile__container}>
          <h1 className={styles.userProfile__title}>Perfil del usuario</h1>
          <ul className={styles.userProfile__info}>
            <li>
              <span>Nombre:</span>
              {currentUser?.userProfile?.firstName}{' '}
              {currentUser?.userProfile?.lastName}{' '}
              {currentUser?.userProfile?.secondLastName}
            </li>
            <li>
              <span>Correo:</span>
              {currentUser?.userProfile?.email}
            </li>
            <li>
              <span>Celular:</span>
              {currentUser?.userProfile?.contacts[0]?.phone
                ? currentUser?.userProfile?.contacts[0]?.phone
                : 'Desconocido'}
            </li>
          </ul>
          <div className={styles.userProfile__options}>
            <button className={styles.userProfile__btn}>Editar perfil</button>
            <button className={styles.userProfile__btn}>
              Cambiar contraseña
            </button>
          </div>
          <button
            className={`${styles.userProfile__btn} ${styles.userProfile__btn_logout}`}
            onClick={handleLogout}
          >
            Cerrar Sesión
          </button>
        </div>
      </main>
    </>
  )
}
