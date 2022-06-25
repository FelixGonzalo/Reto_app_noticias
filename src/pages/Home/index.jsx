import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/layout/Header'
import { Hero } from '../../components/layout/Hero'
import NewsList from '../../components/NewsList/NewsList'
import { useNewsByCategory } from '../../hooks/useNewsByCategory'
import { newsCategories } from '../../services/newsApi/getNewsCategories'
import { ReadingAssistanceMenu } from '../../components/ReadingAssistanceMenu'

//Agregando la importacion para los iconos
import {IoGameController} from 'react-icons/io5';
import {GiSoccerBall, GiMoneyStack} from 'react-icons/gi';

import { Helmet } from 'react-helmet-async'
import styles from './home.module.css'


const Home = () => {
  const { data: heroData, loading: heroLoading } = useNewsByCategory({
    category: newsCategories.technology.category,
    pageSize: 1,
  })
  const { data: businessData, loading: businessLoading } = useNewsByCategory({
    category: newsCategories.business.category,
    pageSize: 4,
  })

  const { data: entertainmentData, loading: entertainmentLoading } =
    useNewsByCategory({
      category: newsCategories.entertainment.category,
      pageSize: 4,
    })

  const { data: sportsData, loading: sportsLoading } = useNewsByCategory({
    category: newsCategories.sports.category,
    pageSize: 4,
  })

  const readingAssistance_getTextArray = () => {
    let textArray = []
    if (heroData.length > 0) textArray.push('En la Portada de hoy. ')
    heroData.forEach((item) => {
      textArray.push(item.title)
    })
    if (heroData.length > 0) textArray.push('En entretenimiento. ')
    entertainmentData.forEach((item) => {
      textArray.push(item.title)
    })
    if (heroData.length > 0) textArray.push('En deportes. ')
    sportsData.forEach((item) => {
      textArray.push(item.title)
    })
    if (heroData.length > 0) textArray.push('En negocios. ')
    businessData.forEach((item) => {
      textArray.push(item.title)
    })
    return textArray
  }

  return (
    <>
    <table>
      <td>
      <Helmet>
        <title>Noticias destacadas | La Portad</title>
        <meta
          name="description"
          content="La Portada es una web de noticias recientes y en español. Todo el acontecer del mundo en un solo lugar."
        />
      </Helmet>
      <main className={styles.home}>
        <ReadingAssistanceMenu getTextArray={readingAssistance_getTextArray} />
        <Header />
        <Hero data={heroData} isloading={heroLoading} />
        <main className={`wrapper ${styles.home__main}`}>
          <section>
            <h3 className={styles.subTitle}>
              &nbsp;{' '}
              <IoGameController style={{ color: 'red', fontSize: '26px' }} />{' '}
              &nbsp;
              {newsCategories.entertainment.categoria}
            </h3>
            <NewsList
              data={entertainmentData}
              isloading={entertainmentLoading}
            />
            <Link
              to={`/noticias/${newsCategories.entertainment.category}`}
              className={styles.home__seemore}
            >
              Ver más
            </Link>
          </section>
          <section>
            <h3 className={styles.subTitle}>
              &nbsp; <GiSoccerBall style={{ color: 'red', fontSize: '26px' }} />{' '}
              &nbsp;
              {newsCategories.sports.categoria}
            </h3>
            <NewsList
              data={sportsData}
              isloading={sportsLoading}
              loadingAsync={true}
            />
            <Link
              to={`/noticias/${newsCategories.sports.category}`}
              className={styles.home__seemore}
            >
              Ver más
            </Link>
          </section>
          <section>
            <h3 className={styles.subTitle}>
              &nbsp; <GiMoneyStack style={{ color: 'red', fontSize: '26px' }} />{' '}
              &nbsp;
              {newsCategories.business.categoria}
            </h3>
            <NewsList
              data={businessData}
              isloading={businessLoading}
              loadingAsync={true}
            />
            <Link
              to={`/noticias/${newsCategories.business.category}`}
              className={styles.home__seemore}
            >
              Ver más
            </Link>
          </section>

          
        </main>
      </main>
      </td>

      <td>
      <aside className={styles.aside}>
            <div class="publicidad">
              <div class="cuadro1">
                <div class="subcuadro1">
                  <br></br><h1>Categorias de Noticias</h1>
                </div>
                
                  <button>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Entretenimiento
                  </button><br></br><br></br>

                  <button>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Deportes
                  </button><br></br><br></br>

                  <button>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Negocios
                  </button><br></br><br></br>

                  <button>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Ciencias
                  </button>
                 
                  <img src="https://phantom-marca.unidadeditorial.es/8923496e7e642f2e610543e260467a6d/resize/1320/f/jpg/assets/multimedia/imagenes/2022/02/07/16442302078686.jpg"></img><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

                <div class="subcuadro2">
                <br></br><p>Buscar Noticia</p>
                <div class="box">
                  <form>
                    <input type="text" name="" pplaceholder="Ingresar..."></input>
                    <input type="submit" name="" vale="search"></input>
                  </form>
                </div>
                </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <p>Lo mas Buscado</p><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <button>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Noticias Por Dia
                  </button><br></br><br></br>

                  <button>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Noticias Por Mes
                  </button><br></br><br></br>

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
                  </button><br></br><br></br>
                  <button>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Noticias en Tecnologia
                  </button>
                  
                  <a href="https://www.bbc.com/mundo/noticias-internacional-61929368"><img src="https://ichef.bbci.co.uk/news/800/cpsprodpb/4BB4/production/_125608391_gettyimages-1404878195.jpg.webp"></img><div class="noticia1"><j>¿Cárcel para las mujeres que aborten?</j><j>5 preguntas sobre qué cambia en si.</j></div></a><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                  <a href="https://www.bbc.com/mundo/noticias-america-latina-61615218"><img src="https://ichef.bbci.co.uk/news/800/cpsprodpb/14EA6/production/_125407658_gettyimages-875053652.jpg.webp"></img><j>Programa de vivienda en Canadá.</j></a><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                  <a href="https://www.bbc.com/mundo/noticias-internacional-61866295"><img src="https://ichef.bbci.co.uk/news/800/cpsprodpb/1C44/production/_125463270_590d005d-3641-4ce5-ba5e-251c30d206fd.jpg.webp"></img><j>Guerra en Ucrania: el misterio de los <j>generales rusos que han muerto</j></j></a><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                  <a href="https://www.bbc.com/mundo/vert-fut-61892361"><img src="https://ichef.bbci.co.uk/news/800/cpsprodpb/1E80/production/_125580870_gettyimages-521945458.jpg.webp"></img><j>¿Por qué el Departamento de </j><j>Defensa de EE.UU. está escuchando </j><j>el sonido de los camarones.</j></a><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              </div>
            </div>
          </aside>
      </td>
    </table>

    </>
    
  )
  }
export default Home

