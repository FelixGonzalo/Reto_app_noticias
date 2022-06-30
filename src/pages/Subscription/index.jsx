import { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { SimpleHeader } from '../../components/layout/Header'
import BtnToggle from '../../components/Suscription/BtnToggle'
import Card from '../../components/Suscription/Card'
import { SuscriptionContext } from '../../state/context/suscriptionProvider'
import styles from './suscription.module.css'

const Subscription = () => {

  const { suscription, changePlan } = useContext(SuscriptionContext);

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
      <main className={`wrapper ${styles.contentCard}`}>
        <BtnToggle
          changePlan={changePlan}
          suscription={suscription} 
        />
        <Card
          name={suscription?.name}
          price={suscription?.price}
          description={suscription?.description}
          details={suscription?.details}
        />
      </main>
    </>
  )
}

export default Subscription
