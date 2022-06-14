import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/layout/Header'
import { Hero } from '../../components/layout/Hero'
import NewsList from '../../components/NewsList/NewsList'
import { useNewsByCategory } from '../../hooks/useNewsByCategory'
import { newsCategories } from '../../services/newsApi/getNewsCategories'
import styles from './home.module.css'

const Home = () => {
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

  return (
    <main className={styles.home}>
      <Header />
      <Hero />
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
