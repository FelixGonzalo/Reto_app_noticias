import { useForm } from 'react-hook-form'
import { useCurrentUser } from '../../../hooks/auth/useCurrentUser'
import { useLogin } from '../../../hooks/auth/useLogin'
import { useUserProfile } from '../../../hooks/auth/useUserProfile'
import styles from './login.module.css'

export function LoginForm() {
  const {
    handleLogin,
    loading: loginLoading,
    error: loginError,
    errorInfo: loginErrorInfo,
  } = useLogin()
  const {
    handleUserProfile,
    loading: userProfileLoading,
    error: userProfileError,
    errorInfo: userProfileErrorInfo,
  } = useUserProfile()
  const { checkCurrentUser } = useCurrentUser()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    handleLogin(data)
      .then((res) => handleUserProfile({ token: res.accessToken }))
      .then(() => checkCurrentUser())
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
      <label htmlFor="email" className={styles.loginForm__label}>
        Correo
      </label>
      <input
        {...register('email', { required: true })}
        id="email"
        className={styles.loginForm__input}
      />
      <label htmlFor="password" className={styles.loginForm__label}>
        Contraseña
      </label>
      <input
        {...register('password', { required: true })}
        id="password"
        className={styles.loginForm__input}
      />
      <button type="submit" className={styles.loginForm__btn}>
        Iniciar sesión
      </button>
      <div className={styles.loginForm__status}>
        {(errors.email || errors.password) && (
          <span>El correo y contraseña son requeridos. </span>
        )}
        {loginLoading && <span>Iniciando sesión... </span>}
        {loginError && <span>Error al iniciar sesión </span>}
        {userProfileLoading && <span>Cargando perfil del usuario... </span>}
        {userProfileError && (
          <span>Error al cargar el perfil del usuario </span>
        )}
        {loginErrorInfo && <span>{loginErrorInfo?.message}. </span>}
        {userProfileErrorInfo && <span>{userProfileErrorInfo?.message}. </span>}
      </div>
    </form>
  )
}
