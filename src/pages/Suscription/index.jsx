import { Helmet } from 'react-helmet-async'
import { SimpleHeader } from '../../components/layout/Header'
import BtnToggle from '../../components/Suscription/BtnToggle'
import Card from '../../components/Suscription/Card'
import { ModalToChangePlan } from '../../components/Suscription/ModalToChangePlan'
import styles from './suscription.module.css'

const Suscription = () => {
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
        <BtnToggle />
        <Card />
        <ModalToChangePlan
          name="Plan Estándar"
          price="s/29 al mes"
          description="una descripción"
          details={['detalle 1', 'detalle 2']}
          otherPlanName="Plan Premiun"
        />
      </main>
    </>
  )
}

export default Suscription
