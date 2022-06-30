import styles from "./btnToggle.module.css"

const BtnToggle = ({changePlan, suscription}) => {

	return (
		<div className={styles.btn}>
		<p className={suscription?.name === 'Plan Premium' ? styles.text_disabled : ''}>Plan Estándar</p>
		<button className={`${styles.btn_toggle} ${suscription?.name === 'Plan Premium' && styles.isPremium}`} onClick={changePlan}>
				<span></span>
				<span></span>
		</button>
		<p className={suscription?.name === 'Plan Premium' ? '': styles.text_disabled}>Plan Premium</p>
	</div>
	)
}

export default BtnToggle