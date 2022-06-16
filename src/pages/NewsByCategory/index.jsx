import { useParams } from 'react-router-dom'
import { SimpleHeader } from '../../components/layout/Header'
import { Loader } from '../../components/loaders/Loader'
import NewsList from '../../components/NewsList/NewsList'
import { ReadingAssistanceMenu } from '../../components/ReadingAssistanceMenu'
import { useNewsByCategoryWithInfiniteScroll } from '../../hooks/useNewsByCategoryWithInfiniteScroll'
import { newsCategories } from '../../services/newsApi/getNewsCategories'

export function NewsByCategory() {
  let { category } = useParams()
  const { data, loading, isTheEnd } = useNewsByCategoryWithInfiniteScroll({
    category: category,
    pageSize: 4,
  })

  const readingAssistance_getTextArray = () => {
    let textArray = []
    data.forEach((item) => {
      textArray.push(item.title)
    })
    return textArray
  }

  return (
    <>
      <ReadingAssistanceMenu getTextArray={readingAssistance_getTextArray} />
      <SimpleHeader />
      <main className="wrapper">
        <h1 style={{ marginLeft: '5px' }}>
          | Noticias sobre {newsCategories[category].categoria}
        </h1>
        <br />
        <br />
        <NewsList data={data} isloading={loading} />
        {loading && <Loader />}
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
