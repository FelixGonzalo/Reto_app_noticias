import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { SimpleHeader } from '../../components/layout/Header'
import FormData from '../../components/Suscription/FormData'
import { ModalToChangePlan } from '../../components/Suscription/ModalToChangePlan'
import { SuscriptionContext } from '../../state/context/suscriptionProvider'

const Data = () => {

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
				<main className={`wrapper`}>
					<FormData/>
					<ModalToChangePlan
						name={suscription?.name}
						price={suscription?.price}
						description={suscription?.description}
						details={suscription?.details}
						otherPlanName={suscription?.otherPlanName}
						handleChangePlan={changePlan}
					/>
				</main>
		</>

	)
}

export default Data