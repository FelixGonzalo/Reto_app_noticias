import { Helmet } from "react-helmet-async"
import { SimpleHeader } from "../../components/layout/Header"
import BtnToggle from "../../components/Suscription/BtnToggle"
import Card from "../../components/Suscription/Card"
import styles from "./suscription.module.css"

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
			<SimpleHeader/>
			<main className={`wrapper ${styles.contentCard}`}>
				<BtnToggle/>
				<Card/>
			</main>
		</>
	)
}

export default Suscription