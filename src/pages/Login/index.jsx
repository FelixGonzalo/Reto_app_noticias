import { Link } from 'react-router-dom'
import { LoginForm } from '../../components/auth/LoginForm'
import { SimpleHeader } from '../../components/layout/Header'
import styles from './login.module.css'

export function Login() {
  return (
    <>
      <SimpleHeader />
      <main className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__container__left}>
            <h1 className={styles.login__title}>
              <Link to={'/'}>_ La Portada _</Link>
              Iniciar Sesión
            </h1>
            <Link to={'/register'} className={styles.login__link}>
              No tengo cuenta
            </Link>
            <LoginForm />
          </div>
          <div className={styles.login__container__right}>
            <img
              src="https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_960_720.jpg"
              alt="imagen de login en la portada"
              className={styles.login__img}
            />
          </div>
        </div>
      </main>
    </>
  )
}
