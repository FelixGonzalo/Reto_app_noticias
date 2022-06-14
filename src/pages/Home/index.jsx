import React from 'react'
import NewsList from '../../components/NewList/NewsList'
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
    <>
      <header className="wrapper">
        <h1>La portada</h1>
      </header>
      <main className="wrapper">
        <section>
          <h3 className={styles.subTitle}>
            🌎 {newsCategories.entertainment.categoria}
          </h3>
          <NewsList data={entertainmentData} isloading={entertainmentData} />
          <h3 className={styles.subTitle}>
            ⚽ {newsCategories.sports.categoria}
          </h3>
          <NewsList data={sportsData} isloading={sportsData} />
          <h3 className={styles.subTitle}>
            🪙 {newsCategories.business.categoria}
          </h3>
          <NewsList data={businessData} isloading={businessLoading} />
        </section>
      </main>
    </>
  )
}

export default Home
