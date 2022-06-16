import { useParams } from 'react-router-dom'
import { SimpleHeader } from '../../components/layout/Header'
import { Loader } from '../../components/loaders/Loader'
import NewsList from '../../components/NewsList/NewsList'
// import { useNewsByCategory } from '../../hooks/useNewsByCategory'
import { useNewsByCategoryWithInfiniteScroll } from '../../hooks/useNewsByCategoryWithInfiniteScroll'
import { newsCategories } from '../../services/newsApi/getNewsCategories'

export function NewsByCategory() {
  let { category } = useParams()
  const {
    data: businessData,
    loading: businessLoading,
    isTheEnd,
  } = useNewsByCategoryWithInfiniteScroll({
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
        {businessLoading && <Loader />}
        {isTheEnd && (
          <p className="message_default">
            Has revisado todas las noticias sobre{' '}
            <span>{newsCategories[category].categoria}</span>
          </p>
        )}
      </main>
    </>
  )
}
