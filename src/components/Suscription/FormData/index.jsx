import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useCurrentUser } from '../../../hooks/auth/useCurrentUser'
import { SuscriptionContext } from '../../../state/context/suscriptionProvider'
import styles from './formData.module.css'

const FormData = () => {
	const { currentUser } = useCurrentUser();
	const { suscription } = useContext(SuscriptionContext);

	const [data, setData] = useState({
		name: `${currentUser?.userProfile?.firstName} ${currentUser?.userProfile?.lastName} ${currentUser?.userProfile?.secondLastName}`|| '',
		cardNumber: '',
		expirationDate: '',
		CVV: '',
	})

	const handleChange = (event) => {
		setData({ ...data, [event.target.name]: event.target.value })
  }

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(data);
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div>
				<label htmlFor="">Nombre y Apellidos</label>
				<input type="text" id="name" name="name" required value={data.name} onChange={handleChange}/>
			</div>
			<div>
				<label htmlFor="">Número de Tarjeta</label>
				<input type="text" name="cardNumber" required value={data.cardNumber} onChange={handleChange} placeholder=''/>
			</div>
			<div className={styles.form__container}>
				<div>
					<label htmlFor="">F. Expira</label>
					<input type="text" id="expira" name='expirationDate' required value={data.expirationDate} onChange={handleChange}/>
				</div>
				<div>
					<label htmlFor="">CVV</label>
					<input type="text" id="cvv" name='CVV' required value={data.CVV} onChange={handleChange} />
				</div>
			</div>
			<button className={styles.form__btn}>Pagar S/ {suscription?.price}.00</button>
		</form>
	)
}

export default FormData