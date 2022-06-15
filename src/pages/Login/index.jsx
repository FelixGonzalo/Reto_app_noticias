import { LoginForm } from '../../components/auth/LoginForm'
import styles from './login.module.css'

export function Login() {
  return (
    <main className={styles.login}>
      <div className={styles.login__container}>
        <div className={styles.login__container__left}>
          <h1 className={styles.login__title}>
            <span>_ La Portada _</span>
            Iniciar Sesión
          </h1>
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
  )
}
