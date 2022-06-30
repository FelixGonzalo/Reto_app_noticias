import styles from './modalToChangePlan.module.css'
import { GoCheck } from 'react-icons/go'
import { useShow } from '../../../hooks/utils/useShow'
export function ModalToChangePlan({
  name = 'Plan',
  price = 0,
  description = 'description',
  details = ['details'],
  otherPlanName = 'other plan',
  handleChangePlan
}) {
  const { show, switch_show } = useShow()

  return (
    <div className={styles.modalToChangePlan}>
      <header className={styles.modalToChangePlan_header} onClick={switch_show}>
        <span className={styles.modalToChangePlan_title}>{name}</span>
        <span>S/ {price} al mes</span>
      </header>
      {show && (
        <main className={styles.modalToChangePlan_body} onClick={switch_show}>
          {description}
          <ul>
            {details?.map((item, index) => (
              <li key={index + 'modalToChangePlan'}>
                <span>
                  <GoCheck />
                </span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </main>
      )}
      <footer className={styles.modalToChangePlan_footer}>
        <button onClick={handleChangePlan}>Cambiar a {otherPlanName}</button>
      </footer>
    </div>
  )
}
