import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { SimpleHeader } from '../../components/layout/Header'
import FormData from '../../components/Suscription/FormData'
import styles from './suscription.module.css'

const Data = () => {
  return (
    <>
      <Helmet>
        <title>Suscripción | La Portada</title>
        <meta
          name="description"
          content="Súscribete en La Portada. Accede a funcionalidades Premium con tu cuenta."
        />
      </Helmet>
      <SimpleHeader />
      <main className={`wrapper ${styles.container}`}>
        <FormData />
      </main>
    </>
  )
}

export default Data
