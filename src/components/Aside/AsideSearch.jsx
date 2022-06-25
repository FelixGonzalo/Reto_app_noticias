import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './aside.module.css'

const AsideSearch = () => {
	const [search, setSearch] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
	}


	return (
		<section className={styles.aside__search}>
			<h2>Buscar Noticia</h2>
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Ingresar..."/>
				<Link to={`/noticias/search/${search}`}>
					<button className={styles.btn_search}type="submit">Buscar</button>
				</Link>
			</form>
			<div className={styles.aside__search_popular}>
				<div>
					<Link to={'/noticias/search/Perú'}>Perú</Link>
					<Link to={'/noticias/search/Pedro Castillo'}>Pedro Castillo</Link>
					<Link to={'/noticias/search/Clases Presenciales'}>Clases Presenciales</Link>
					<Link to={'/noticias/search/Startups'}>Startups</Link>
					<Link to={'/noticias/search/Actualidad'}>Actualidad</Link>
				</div>
			</div>
		</section>
	)
}

export default AsideSearch