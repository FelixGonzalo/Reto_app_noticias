import styles from './card.module.css'

const Card = () => {
	return (
		<div className={styles.card}>

			<div className={styles.card__header}>
				<h2>
					<span>S/</span>
					<span>59</span>
						<span>/AL MES</span>
				</h2>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque aliquam veniam.</p>
			</div>
			
			<div className={styles.card__body}>
				<p>✔ Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>

				<p>✔ Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>

				<p className={styles.text_disabled}>✔ Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>

				<p className={styles.text_disabled}>✔ Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
			</div>

			<button className={styles.card__footer}>
					<span>Suscribirme</span>
			</button>

		</div>
	)
}

export default Card