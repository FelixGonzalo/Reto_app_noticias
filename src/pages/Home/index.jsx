import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/layout/Header'
import { Hero } from '../../components/layout/Hero'
import NewsList from '../../components/NewsList/NewsList'
import { useNewsByCategory } from '../../hooks/useNewsByCategory'
import { newsCategories } from '../../services/newsApi/getNewsCategories'
import { ReadingAssistanceMenu } from '../../components/ReadingAssistanceMenu'

//Agregando la importacion para los iconos
import { IoGameController } from 'react-icons/io5'
import { GiSoccerBall, GiMoneyStack } from 'react-icons/gi'

import { Helmet } from 'react-helmet-async'
import styles from './home.module.css'
import Aside from '../../components/Aside'
import AsideSearch from '../../components/Aside/AsideSearch'

const Home = () => {
  const { data: heroData, loading: heroLoading } = useNewsByCategory({
    category: newsCategories.entertainment.category,
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
      <Helmet>
        <title>Noticias destacadas | La Portada</title>
        <meta
          name="description"
          content="La Portada es una web de noticias recientes y en español. Todo el acontecer del mundo en un solo lugar."
        />
      </Helmet>

      <ReadingAssistanceMenu getTextArray={readingAssistance_getTextArray} />

      <Header />
      <main className={styles.home}>
        <Hero data={heroData} isloading={heroLoading} />

        <div className={styles.home__main}>
          <div className={styles.home__main_search}>
            <AsideSearch />
          </div>
          <div className={styles.home__main_sections}>
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
                &nbsp;{' '}
                <GiSoccerBall style={{ color: 'red', fontSize: '26px' }} />{' '}
                &nbsp;
                {newsCategories.sports.categoria}
              </h3>
              <NewsList
                data={sportsData}
                isloading={sportsLoading}
                loadingAsync={true}
                saveToHistoryWhenClicked={true}
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
                &nbsp;{' '}
                <GiMoneyStack style={{ color: 'red', fontSize: '26px' }} />{' '}
                &nbsp;
                {newsCategories.business.categoria}
              </h3>
              <NewsList
                data={businessData}
                isloading={businessLoading}
                loadingAsync={true}
                saveToHistoryWhenClicked={true}
              />
              <Link
                to={`/noticias/${newsCategories.business.category}`}
                className={styles.home__seemore}
              >
                Ver más
              </Link>
            </section>
          </div>

          <div className={styles.home__main_aside}>
            <Aside />
          </div>
        </div>
      </main>
    </>
  )
}
export default Home
