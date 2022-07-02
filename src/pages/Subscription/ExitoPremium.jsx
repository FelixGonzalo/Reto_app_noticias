import { GoCheck } from 'react-icons/go';
import { Link } from 'react-router-dom';
import styles from './cardExito.module.css'
import { Helmet } from 'react-helmet-async'
import { SimpleHeader } from '../../components/layout/Header'

//Agregando la importacion para los iconos
import { FaCheckCircle } from "react-icons/fa";

const ExitoPremium = () => {

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

		<div className={styles.card}>
			&nbsp;{' '}
            <center><FaCheckCircle style={{ color: 'red', fontSize: '94px' }} />{' '}</center>
			
			<div className={styles.card__header}>
            <p>Felicitaciones!!, Bienvenido</p>
            <p>has adquirido el</p>
				<h2>
					<span>Plan Premium</span>
				</h2>
				<p>S/. 59 al mes</p>
			</div>
			
			<div className={styles.card__body}>
				{
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
				}
			</div>

            <div className={styles.card__body}>
				{
				
					<center><p>Ir a ver mi Plan</p></center>
				}
			</div>

			<Link to={'/usuario/suscripcion/data'} className={styles.card__footer}>
					<span>Ir a Inicio de Suscripci&oacute;n</span>
			</Link>

		</div>
        </>
	)
}

export default ExitoPremium