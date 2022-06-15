import { useForm } from 'react-hook-form'
import { useCurrentUser } from '../../../hooks/auth/useCurrentUser'
import { useRegisterUser } from '../../../hooks/auth/useRegisterUser'
import styles from '../LoginForm/login.module.css'

export function RegisterForm() {
  const { handleRegisterUser, loading, error, errorInfo } = useRegisterUser()
  const { checkCurrentUser } = useCurrentUser()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    handleRegisterUser(data).then(() => checkCurrentUser())
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
      <label htmlFor="firstName" className={styles.loginForm__label}>
        *Nombre
      </label>
      <input
        {...register('firstName', { required: true })}
        id="firstName"
        className={styles.loginForm__input}
      />
      <label htmlFor="lastName" className={styles.loginForm__label}>
        *Apellido Paterno
      </label>
      <input
        {...register('lastName', { required: true })}
        id="lastName"
        className={styles.loginForm__input}
      />
      <label htmlFor="secondLastName" className={styles.loginForm__label}>
        *Apellido Materno
      </label>
      <input
        {...register('secondLastName', { required: true })}
        id="secondLastName"
        className={styles.loginForm__input}
      />
      <label htmlFor="email" className={styles.loginForm__label}>
        *Correo
      </label>
      <input
        {...register('email', { required: true })}
        id="email"
        className={styles.loginForm__input}
      />
      <label htmlFor="phone" className={styles.loginForm__label}>
        Celular
      </label>
      <input
        {...register('phone')}
        id="phone"
        className={styles.loginForm__input}
      />
      <label htmlFor="password" className={styles.loginForm__label}>
        *Contraseña
      </label>
      <input
        {...register('password', { required: true })}
        id="password"
        type="password"
        autoComplete="on"
        className={styles.loginForm__input}
      />
      <button type="submit" className={styles.loginForm__btn}>
        Registrarse
      </button>
      <div className={styles.loginForm__status}>
        {errors.firstName && <span>El nombre es requerido. </span>}
        {errors.lastName && <span>El apellido paterno es requerido. </span>}
        {errors.secondLastName && (
          <span>El apellido materno es requerido. </span>
        )}
        {errors.email && <span>El correo es requerido. </span>}
        {errors.password && <span>La contraseña es requerida. </span>}
        {loading && <span>Registrando usuario... </span>}
        {error && <span>Error al registrar el usuario. </span>}
        {errorInfo && <span>{errorInfo?.message}</span>}
      </div>
    </form>
  )
}
