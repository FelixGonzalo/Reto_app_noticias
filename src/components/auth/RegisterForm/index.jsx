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
        {...register('firstName', {
          required: 'El nombre es requerido. ',
          maxLength: {
            value: 20,
            message: 'El nombre debe tener un máximo de 20 caracteres. ',
          },
          pattern: {
            value: /[a-zA-Z ]{2,254}$/,
            message: 'El nombre no debe contener números. ',
          },
        })}
        id="firstName"
        className={styles.loginForm__input}
      />
      <label htmlFor="lastName" className={styles.loginForm__label}>
        *Apellido Paterno
      </label>
      <input
        {...register('lastName', {
          required: 'El apellido paterno es requerido. ',
          maxLength: {
            value: 20,
            message:
              'El apellido paterno debe tener un máximo de 20 caracteres. ',
          },
          pattern: {
            value: /[a-zA-Z ]{2,254}$/,
            message: 'El apellido paterno no debe contener números. ',
          },
        })}
        id="lastName"
        className={styles.loginForm__input}
      />
      <label htmlFor="secondLastName" className={styles.loginForm__label}>
        *Apellido Materno
      </label>
      <input
        {...register('secondLastName', {
          required: 'El apellido materno es requerido. ',
          maxLength: {
            value: 20,
            message:
              'El apellido materno debe tener un máximo de 20 caracteres. ',
          },
          pattern: {
            value: /[a-zA-Z ]{2,254}$/,
            message: 'El apellido materno no debe contener números. ',
          },
        })}
        id="secondLastName"
        className={styles.loginForm__input}
      />
      <label htmlFor="email" className={styles.loginForm__label}>
        *Correo
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
            //eslint-disable-next-line
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'El correo no es valido. ',
          },
        })}
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
        {...register('password', {
          required: 'La contraseña es requerida. ',
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
        Registrarse
      </button>
      <div className={styles.loginForm__status}>
        {errors?.firstName && <p>{errors?.firstName?.message} </p>}
        {errors?.lastName && <p>{errors?.lastName?.message} </p>}
        {errors?.secondLastName && <p>{errors?.secondLastName?.message} </p>}
        {errors?.email && <p>{errors?.email?.message} </p>}
        {errors?.password && <p>{errors?.password?.message}</p>}

        {loading && <p>Registrando usuario... </p>}
        {error && <p>Error al registrar el usuario. </p>}
        {errorInfo && <p>{errorInfo?.message}</p>}
      </div>
    </form>
  )
}
