import React from 'react'
import styles from './hero.module.css'

const HeroCard = ({ urlToImage, url, title, description, author, source }) => {
		return (
			<div className={styles.hero__card}>
				<img src={urlToImage} alt="hero" />
				<div className={styles.hero__card__description}>
					<a href={url} target='_blank' rel='noreferrer'>
						<h3>{title}</h3>
					</a>
					<p>{description}</p>
					<small>
							<span>Autor: {author}</span>
							<span>Fuente: {source}</span>
					</small>
				</div>
    	</div>
		)
}

export default HeroCard