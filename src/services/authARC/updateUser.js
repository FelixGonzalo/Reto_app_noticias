import { config } from '../../config'

const { API_URL } = config.authARC

export async function updateUser({
	token,
  firstName,
  lastName,
  secondLastName,
  email,
  phone = '',
  deviceOrigin = 'unknown',
  document = 'unknown',
  typeDocument = 'DNI',
}) {
  const url = `${API_URL}/profile`
  return await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
			firstName,
			lastName,
			secondLastName,
			displayName: email,
			email,
			contacts: [
				{
					phone,
					type: "HOME"
				}
			],
			attributes: [
				{
					name: 'deviceOrigin',
					value: deviceOrigin,
					type: 'String',
				},
				{
					name: 'typeDocument',
					value: typeDocument,
					type: 'String',
				},
				{
					name: 'document',
					value: document,
					type: 'String',
				},
			],
    }),
  }).then((res) => res.json())
}
