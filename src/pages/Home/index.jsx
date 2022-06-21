import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/layout/Header'
import { Hero } from '../../components/layout/Hero'
import NewsList from '../../components/NewsList/NewsList'
import { useNewsByCategory } from '../../hooks/useNewsByCategory'
import { newsCategories } from '../../services/newsApi/getNewsCategories'
import styles from './home.module.css'
import { ReadingAssistanceMenu } from '../../components/ReadingAssistanceMenu'

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
    <main className={styles.home}>
      <ReadingAssistanceMenu getTextArray={readingAssistance_getTextArray} />
      <Header />
      <Hero data={heroData} isloading={heroLoading} />
      <main className={`wrapper ${styles.home__main}`}>
        <section>
          <h3 className={styles.subTitle}>
            🌎 {newsCategories.entertainment.categoria}
          </h3>
          <NewsList data={entertainmentData} isloading={entertainmentLoading} />
          <Link
            to={`/noticias/${newsCategories.entertainment.category}`}
            className={styles.home__seemore}
          >
            Ver más
          </Link>
        </section>
        <section>
          <h3 className={styles.subTitle}>
            ⚽ {newsCategories.sports.categoria}
          </h3>
          <NewsList data={sportsData} isloading={sportsLoading} />
          <Link
            to={`/noticias/${newsCategories.sports.category}`}
            className={styles.home__seemore}
          >
            Ver más
          </Link>
        </section>
        <section>
          <h3 className={styles.subTitle}>
            🪙 {newsCategories.business.categoria}
          </h3>
          <NewsList data={businessData} isloading={businessLoading} />
          <Link
            to={`/noticias/${newsCategories.business.category}`}
            className={styles.home__seemore}
          >
            Ver más
          </Link>
        </section>
      </main>
    </main>
  )
}

export default Home
