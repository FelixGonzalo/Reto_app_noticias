import { config } from '../../config'

const { API_URL } = config.authARC

export async function registerUser({
  firstName,
  lastName,
  secondLastName,
  email,
  password,
  phone = '',
  deviceOrigin = 'unknown',
  document = 'unknown',
  typeDocument = 'DNI',
}) {
  const url = `${API_URL}/signup`
  return await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      identity: {
        userName: email,
        credentials: password,
        password: 'password',
      },
      profile: {
        firstName,
        lastName,
        secondLastName,
        displayName: email,
        email,
        contacts: [
          {
            phone,
            type: 'HOME',
          },
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
      },
    }),
  }).then((res) => res.json())
}
