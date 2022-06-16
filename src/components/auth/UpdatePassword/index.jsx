import React, { useState } from 'react'
import { useUpdatePassword } from '../../../hooks/auth/useUpdatePassword';

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
			<label>Contraseña Actual</label>
			<input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
			<label>Nueva Contraseña</label>
			<input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
			<button type='submit'>
				Cambiar contraseña
			</button>
			{message && <p>{message}</p>}
			{success && <p>Contraseña cambiada correctamente</p>}
			{error && <p>{error}</p>}
    </form>
	)
}

export default UpdatePassword