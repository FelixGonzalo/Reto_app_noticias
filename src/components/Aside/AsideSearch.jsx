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
			<h2>Busca una noticia</h2>
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Escribe algo aquí ..."/>
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
			<div className={styles.aside__search_popular}>
				<h2>Categorías de Noticias</h2>
				<div>
					<Link to={'/noticias/business'}>Negocios</Link>
					<Link to={'/noticias/entertainment'}>Entretenimiento</Link>
					<Link to={'/noticias/general'}>General</Link>
					<Link to={'/noticias/health'}>Salud</Link>
					<Link to={'/noticias/science'}>Ciencias</Link>
					<Link to={'/noticias/sports'}>Deportes</Link>
					<Link to={'/noticias/technology'}>Tecnología</Link>
				</div>
			</div>
		</section>
	)
}

export default AsideSearch