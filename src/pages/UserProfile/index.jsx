import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import UpdatePassword from '../../components/auth/UpdatePassword'
import UpdateUser from '../../components/auth/UpdateUser'
import { VerifyEmail } from '../../components/auth/VerifyEmail'
import { SimpleHeader } from '../../components/layout/Header'
import { useCurrentUser } from '../../hooks/auth/useCurrentUser'
import styles from './userProfile.module.css'

function UserProfile() {
  const { currentUser, handleLogout } = useCurrentUser()

  return (
    <>
      <Helmet>
        <title>Perfil | La Portada</title>
        <meta
          name="description"
          content="Perfil en La Portada. Una web de noticias recientes y en español. Todo el acontecer del mundo en un solo lugar."
        />
      </Helmet>
      <SimpleHeader />
      <VerifyEmail />
      <main className="wrapper">
        <div className={styles.userProfile__container}>
          <div className={styles.userProfile__container__header}>
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
                {currentUser?.userProfile?.contacts &&
                currentUser?.userProfile?.contacts[0]?.phone
                  ? currentUser?.userProfile?.contacts[0]?.phone
                  : 'Desconocido'}
              </li>
            </ul>
            <button
              className={`${styles.userProfile__btn} ${styles.userProfile__btn_logout}`}
              onClick={handleLogout}
            >
              Cerrar Sesión
            </button>
          </div>
          <div className={styles.userProfile__options}>
            <Link
              className={`${styles.userProfile__btn} ${styles.userProfile__btn_logout}`}
              to={'/noticias/historial'}
            >
              Historial de noticias
            </Link>
          </div>
          <div className={styles.userProfile__options}>
            <h2>Editar perfil</h2>
            <UpdateUser />
          </div>
          <div className={styles.userProfile__options}>
            <h2>Cambiar contraseña</h2>
            <UpdatePassword />
          </div>
        </div>
        
      </main>
    </>
  )
}

export default UserProfile
