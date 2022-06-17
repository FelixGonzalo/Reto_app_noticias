import { useState } from 'react'
import { updateUser } from '../../services/authARC/updateUser'

export function useUpdateUser() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
	const [ success, setSuccess ] = useState(false)

	let token = localStorage.getItem('userToken');
  token = (JSON.parse(token));
  token = token?.accessToken;

  const handleUpdateUser = async ({
    firstName,
    lastName,
    secondLastName,
    email,
    phone = '',
  }) => {
    try {
      setLoading(true)
      setError(false)
      const res = await updateUser({
				token,
        firstName,
        lastName,
        secondLastName,
        email,
        phone,
      })
      setLoading(false)
			setSuccess(true)
      console.log(res)
      return res;
    } catch (error) {
      setLoading(false)
      setError(true)
      console.error(error)
    }
  }

  return { handleUpdateUser, loading, error , success}
}
