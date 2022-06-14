import { useParams } from 'react-router-dom'
import { Footer } from '../../components/layout/Footer.jsx'
import { SimpleHeader } from '../../components/layout/Header'
import NewsList from '../../components/NewList/NewsList'
import { useNewsByCategory } from '../../hooks/useNewsByCategory'
import { newsCategories } from '../../services/newsApi/getNewsCategories'

export function NewsByCategory() {
  let { category } = useParams()
  const { data: businessData, loading: businessLoading } = useNewsByCategory({
    category: category,
    pageSize: 20,
  })
  return (
    <>
      <SimpleHeader />

      <main className="wrapper">
        <h1 style={{ marginLeft: '5px' }}>
          | Noticias sobre {newsCategories[category].categoria}
        </h1>
        <br />
        <br />
        <NewsList data={businessData} isloading={businessLoading} />
      </main>
      <Footer />
    </>
  )
}
