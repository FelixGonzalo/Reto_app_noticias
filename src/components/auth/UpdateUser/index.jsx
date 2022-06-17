import React, { useState, useEffect } from 'react'
import { useCurrentUser } from '../../../hooks/auth/useCurrentUser';
import { useUpdateUser } from '../../../hooks/auth/useUpdateUser';
import styles from './updateUser.module.css'

const UpdateUser = () => {
	const { currentUser} = useCurrentUser();
	const { handleUpdateUser, success, error, loading } = useUpdateUser();

	const [ data , setData ] = useState({
		firstName:  '',
		lastName:  '',
		secondLastName: '',
		phone: '',
		email: '',
	})

	useEffect(() => {
		setData({
			firstName: currentUser?.userProfile?.firstName || '',
			lastName: currentUser?.userProfile?.lastName || '',
			secondLastName: currentUser?.userProfile?.secondLastName || '',
			phone: currentUser?.userProfile?.contacts[0]?.phone || '',
			email: currentUser?.userProfile?.email || '',
		})
	}	, [currentUser])

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value
		})
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		handleUpdateUser(data)
	}

		return (
			<form onSubmit={(e) => handleSubmit(e)}>
				<label>Nombre</label>
				<input 
					type="text"
					placeholder="Nombre" 
					value={data.firstName} 
					onChange={(e) => handleChange(e)} 
					name='firstName'
				/>

				<label>Apellido</label>
				<input 
					type="text" 
					placeholder="Apellido" 
					value={data.lastName} 
					onChange={(e) => handleChange(e)} 
					name='lastName'
				/>

				<label>Segundo Apellido</label>
				<input 
					type="text" 
					placeholder="Segundo Apellido" 
					value={data.secondLastName} 
					onChange={(e) => handleChange(e)} 
					name='secondLastName'
				/>

				<label>Celular</label>
				<input 
					type="text" 
					placeholder="Celular" 
					value={data.phone}  
					onChange={(e) => handleChange(e)}
					name='phone'
				/>

				<button type='submit' className={styles.btn}>
					Actualizar Datos
				</button>

				{success && <p>Datos actualizados correctamente</p>}
				{error && <p>{error}</p>}
				{loading && <p>Cargando...</p>}
			</form>
		)
}

export default UpdateUser