import { Link } from 'react-router-dom'
import styles from './cardExito.module.css'
import { FaCheckCircle } from 'react-icons/fa'
import { useContext } from 'react'
import { SuscriptionContext } from '../../state/context/suscriptionProvider'

const Exito = () => {
  const { suscription } = useContext(SuscriptionContext)
  return (
    <div className={styles.card}>
      &nbsp;{' '}
      <center>
        <FaCheckCircle
          style={{ color: 'var(--primary-color)', fontSize: '94px' }}
        />{' '}
      </center>
      <div className={styles.card__header}>
        <p>Felicitaciones!!, Bienvenido</p>
        <p>has adquirido el</p>
        <h2>
          <span>{suscription?.name}</span>
        </h2>
        <p>S/. {suscription?.price} al mes</p>
      </div>
      <div className={styles.card__body}>
        {<p>{suscription?.description}</p>}
      </div>
      <div className={styles.card__body}>
        {
          <Link to={'/suscripcion'} className={styles.card__body_link}>
            <p>Ir a ver mi Plan</p>
          </Link>
        }
      </div>
      <Link to={'/'} className={styles.card__footer}>
        <span>Ir al inicio</span>
      </Link>
    </div>
  )
}

export default Exito
