import { useCurrentUser } from '../../../hooks/auth/useCurrentUser'
import { useSendEmailToVerifyEmail } from '../../../hooks/auth/useSendEmailToVerifyEmail'
import { Loader } from '../../loaders/Loader'
import styles from './verifyEmail.module.css'

export function VerifyEmail() {
  const { currentUser } = useCurrentUser()
  const {
    handleSendEmailToVerifyEmail,
    loading: sendEmailLoading,
    message: sendEmailMessage,
  } = useSendEmailToVerifyEmail()

  if (currentUser?.userProfile?.emailVerified) {
    return null
  }

  return (
    <div className={`wrapper ${styles.verifyEmail_container}`}>
      <details className={styles.verifyEmail}>
        <summary>
          Es necesario verificar su cuenta para acceder a todos los beneficios
          de su cuenta.
          <div className={styles.verifyEmail_options}>
            <button
              className={styles.verifyEmail_btn}
              onClick={() =>
                handleSendEmailToVerifyEmail({
                  email: currentUser?.userProfile?.email,
                })
              }
            >
              Verificar correo
            </button>
          </div>
        </summary>
        <ul className={styles.verifyEmail_moreInfo}>
          <li>
            Luego de dar clic en "Verificar correo", se le enviará un mensaje al
            correo de su cuenta con la opción de verificar su cuenta mediante{' '}
            <a
              href="https://elcomercio.pe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              El Comercio
            </a>
          </li>
          <li>Luego de validar su cuenta, inicie sesión nuevamente". </li>
        </ul>
      </details>
      {sendEmailMessage && (
        <p className="message_default">{sendEmailMessage}</p>
      )}
      {sendEmailLoading && <Loader />}
    </div>
  )
}
