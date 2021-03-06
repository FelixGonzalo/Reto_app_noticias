import { GoCheck } from 'react-icons/go'
import { Link } from 'react-router-dom'
import styles from './card.module.css'

export const Card = ({
  price = 0,
  description = 'description',
  details = ['details'],
  linkTo = '',
  isSubscribed = false,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <h2>
          <span>S/</span>
          <span>{price}</span>
          <span>/AL MES</span>
        </h2>
        <p>{description}</p>
      </div>
      <div className={styles.card__body}>
        {details?.map((item, index) => (
          <li key={index + 'card'}>
            <span>
              <GoCheck />
            </span>
            <p>{item}</p>
          </li>
        ))}
      </div>
      {!isSubscribed && (
        <Link to={linkTo} className={styles.card__footer}>
          <span>Suscribirme</span>
        </Link>
      )}
    </div>
  )
}
