import styles from './aside.module.css'

const Aside = () => {
	return (
		<aside className={styles.aside}>
			<section >
				<div>
					<div>
						<h1>Categorias de Noticias</h1>
					</div>
					<button>
						Entretenimiento
					</button>
					<button>
						Deportes
					</button>
					<button>
						Negocios
					</button>
					<button>
						Ciencias
					</button>
						
					<img src="https://phantom-marca.unidadeditorial.es/8923496e7e642f2e610543e260467a6d/resize/1320/f/jpg/assets/multimedia/imagenes/2022/02/07/16442302078686.jpg"></img>
				<div>
					<p>Buscar Noticia</p>
						<form>
							<input type="text" name="" placeholder="Ingresar..."></input>
							<input type="submit" name="" vale="search"></input>
						</form>
				</div>
					<p>Lo mas Buscado</p>
					<button>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							Noticias Por Dia
						</button>

						<button>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							Noticias Por Mes
						</button>

						<button>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							Noticias en Salud
						</button><br></br><br></br>

						<button>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							Noticias en Politica
						</button>
						<button>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							Noticias en Tecnologia
						</button>
						
						<a href="https://www.bbc.com/mundo/noticias-internacional-61929368"><img src="https://ichef.bbci.co.uk/news/800/cpsprodpb/4BB4/production/_125608391_gettyimages-1404878195.jpg.webp"></img><div><j>¿Cárcel para las mujeres que aborten?</j><j>5 preguntas sobre qué cambia en si.</j></div></a>

						<a href="https://www.bbc.com/mundo/noticias-america-latina-61615218"><img src="https://ichef.bbci.co.uk/news/800/cpsprodpb/14EA6/production/_125407658_gettyimages-875053652.jpg.webp"></img><j>Programa de vivienda en Canadá.</j></a>

						<a href="https://www.bbc.com/mundo/noticias-internacional-61866295"><img src="https://ichef.bbci.co.uk/news/800/cpsprodpb/1C44/production/_125463270_590d005d-3641-4ce5-ba5e-251c30d206fd.jpg.webp"></img><j>Guerra en Ucrania: el misterio de los <j>generales rusos que han muerto</j></j></a>

						<a href="https://www.bbc.com/mundo/vert-fut-61892361"><img src="https://ichef.bbci.co.uk/news/800/cpsprodpb/1E80/production/_125580870_gettyimages-521945458.jpg.webp"></img><j>¿Por qué el Departamento de </j><j>Defensa de EE.UU. está escuchando </j><j>el sonido de los camarones.</j></a>
				</div>
			</section>
  </aside>
	)
}

export default Aside