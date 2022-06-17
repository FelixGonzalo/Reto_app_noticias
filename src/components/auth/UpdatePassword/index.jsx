import React, { useState } from 'react'
import { useUpdatePassword } from '../../../hooks/auth/useUpdatePassword';
import styles from './updatePassword.module.css';

const UpdatePassword = () => {

	const { handleUpdatePassword, message, success, error} = useUpdatePassword();

  const [ password, setPassword ] = useState('');
  const [ newPassword, setNewPassword ] = useState('');  

	const handleSubmit = (e) => {
		e.preventDefault();
		handleUpdatePassword({oldPassword:password, newPassword});
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña actual"/>
			<input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} placeholder="Nueva Contraseña"/>
			<button type='submit' className={styles.btn}>
				Cambiar contraseña
			</button>
			{message && <p>{message}</p>}
			{success && <p>Contraseña cambiada correctamente</p>}
			{error && <p>{error}</p>}
    </form>
	)
}

export default UpdatePassword