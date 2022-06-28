import { useState } from "react"
import styles from "./btnToggle.module.css"

const BtnToggle = () => {

	const [isPremium, setIsPremium] = useState(false);

	const handleClick = () => {
		setIsPremium(!isPremium);
	}


	return (
		<div className={styles.btn}>
		<p>Plan Estándar</p>
		<button className={`${styles.btn_toggle} ${isPremium && styles.isPremium}`} onClick={handleClick}>
				<span></span>
				<span></span>
		</button>
		<p>Plan Premium</p>
	</div>
	)
}

export default BtnToggle