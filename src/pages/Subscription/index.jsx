import { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { SimpleHeader } from '../../components/layout/Header'
import BtnToggle from '../../components/Suscription/BtnToggle'
import { Card } from '../../components/Suscription/Card'
import { useCurrentUser } from '../../hooks/auth/useCurrentUser'
import { SuscriptionContext } from '../../state/context/suscriptionProvider'
import styles from './suscription.module.css'

const Subscription = () => {
  const { suscription, changePlan, currentUserPlan } =
    useContext(SuscriptionContext)
  const { isUserLoggedIn } = useCurrentUser()

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
      <main className={`wrapper ${styles.contentCard} ${styles.container}`}>
        {currentUserPlan ? (
          <>
            <h1>{suscription?.name}</h1>
            <Card
              name={suscription?.name}
              price={suscription?.price}
              description={suscription?.description}
              details={suscription?.details}
              linkTo={isUserLoggedIn ? '/suscripcion/data' : '/login'}
              isSubscribed={true}
            />
          </>
        ) : (
          <>
            <h1>Suscríbete</h1>
            <BtnToggle changePlan={changePlan} suscription={suscription} />
            <Card
              name={suscription?.name}
              price={suscription?.price}
              description={suscription?.description}
              details={suscription?.details}
              linkTo={isUserLoggedIn ? '/suscripcion/data' : '/login'}
            />
          </>
        )}
      </main>
    </>
  )
}

export default Subscription
