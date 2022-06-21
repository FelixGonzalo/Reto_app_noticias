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
    pageSize: 10,
  })

  const categoryName = newsCategories[category]?.categoria
    ? newsCategories[category].categoria
    : category

  const readingAssistance_getTextArray = () => {
    let textArray = []
    if (data.length > 0) textArray.push(`En ${categoryName}.`)
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
        <h1 style={{ marginLeft: '5px' }}>| Noticias sobre {categoryName}</h1>
        <br />
        <br />
        <NewsList data={data} isloading={loading} />
        {loading && <Loader />}
        {isTheEnd && data.length > 0 && (
          <p className="message_default">
            Has revisado todas las noticias sobre <span>{categoryName}</span>
          </p>
        )}
      </main>
    </>
  )
}
