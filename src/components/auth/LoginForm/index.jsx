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
        {...register('email', {
          required: 'El correo es requerido. ',
          maxLength: {
            value: 100,
            message: 'El correo debe tener un máximo de 100 caracteres. ',
          },
          pattern: {
            value:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'El correo no es valido. ',
          },
        })}
        id="email"
        className={styles.loginForm__input}
      />
      <label htmlFor="password" className={styles.loginForm__label}>
        Contraseña
      </label>
      <input
        {...register('password', {
          required: 'La constraseña es requerida. ',
          maxLength: {
            value: 100,
            message: 'La contraseña debe tener un máximo de 100 caracteres. ',
          },
          minLength: {
            value: 8,
            message: 'La contraseña debe tener un mínimo de 8 caracteres. ',
          },
        })}
        id="password"
        type="password"
        autoComplete="on"
        className={styles.loginForm__input}
      />
      <button type="submit" className={styles.loginForm__btn}>
        Iniciar sesión
      </button>
      <div className={styles.loginForm__status}>
        {errors?.email && <p>{errors?.email?.message}</p>}
        {errors?.password && <p>{errors?.password?.message}</p>}

        {loginLoading && <p>Iniciando sesión... </p>}
        {loginError && <p>Error al iniciar sesión </p>}
        {userProfileLoading && <p>Cargando perfil del usuario... </p>}
        {userProfileError && <p>Error al cargar el perfil del usuario </p>}
        {loginErrorInfo && <p>{loginErrorInfo?.message}. </p>}
        {userProfileErrorInfo && <p>{userProfileErrorInfo?.message}. </p>}
      </div>
    </form>
  )
}
