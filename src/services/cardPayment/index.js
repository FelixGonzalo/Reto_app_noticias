import isCreditCard from './isCreditCard'

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function payWithCard({ name, cardNumber, expirationDate, CVV }) {
  try {
    await sleep(2000)
    const date = expirationDate.split('/')
    if (!isCreditCard(cardNumber)) throw new Error('Error de datos')
    if (CVV.length !== 3 || isNaN(CVV)) throw new Error('Error de datos')
    if (
      expirationDate.length !== 5 ||
      date.length !== 2 ||
      isNaN(date[0]) ||
      isNaN(date[1])
    ) {
      throw new Error('Error de datos')
    }
    return {
      name,
      error: false,
      message: 'Se ha realizado el pago correctamente',
    }
  } catch (error) {
    throw new Error('Error en el procesamiento, intente nuevamente')
  }
}
