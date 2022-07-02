import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useCurrentUser } from '../../../hooks/auth/useCurrentUser'
import { SuscriptionContext } from '../../../state/context/suscriptionProvider'
import styles from './formData.module.css'
import { useCardPayment } from '../../../hooks/paymentMethods/useCardPayment'
import { Loader } from '../../loaders/Loader'
import { useShow } from '../../../hooks/utils/useShow'
import Exito from '../Exito'
import { ModalToChangePlan } from '../ModalToChangePlan'

const FormData = () => {
  const { currentUser } = useCurrentUser()
  const { suscription, changePlan, updateCurrentUserPlan } =
    useContext(SuscriptionContext)
  const { handleCardPayment, loading, errorInfo } = useCardPayment()
  const { show, switch_show } = useShow()

  const [data, setData] = useState({
    name:
      `${currentUser?.userProfile?.firstName} ${currentUser?.userProfile?.lastName} ${currentUser?.userProfile?.secondLastName}` ||
      '',
    cardNumber: '',
    expirationDate: '',
    CVV: '',
  })

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleCardPayment(data).then((res) => {
      if (res) {
        updateCurrentUserPlan()
        switch_show()
      }
    })
  }

  if (show) {
    return <Exito />
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Nombre y Apellidos</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Número de Tarjeta</label>
          <input
            type="text"
            name="cardNumber"
            required
            value={data.cardNumber}
            onChange={handleChange}
            placeholder=""
          />
        </div>
        <div className={styles.form__container}>
          <div>
            <label htmlFor="">F. Expira</label>
            <input
              type="text"
              id="expira"
              name="expirationDate"
              required
              value={data.expirationDate}
              placeholder="00/00"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="">CVV</label>
            <input
              type="text"
              id="cvv"
              name="CVV"
              required
              value={data.CVV}
              placeholder="000"
              onChange={handleChange}
            />
          </div>
        </div>
        <button className={styles.form__btn}>
          Pagar S/ {suscription?.price}.00
        </button>
      </form>
      {loading && <Loader />}
      {errorInfo && (
        <p className="message_default">
          <span>{errorInfo}</span>
        </p>
      )}
      <ModalToChangePlan
        name={suscription?.name}
        price={suscription?.price}
        description={suscription?.description}
        details={suscription?.details}
        otherPlanName={suscription?.otherPlanName}
        handleChangePlan={changePlan}
      />
    </>
  )
}

export default FormData
