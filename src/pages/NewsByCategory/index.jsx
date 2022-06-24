import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { SimpleHeader } from '../../components/layout/Header'
import { Loader } from '../../components/loaders/Loader'
import NewsList from '../../components/NewsList/NewsList'
import { ReadingAssistanceMenu } from '../../components/ReadingAssistanceMenu'
import { useNewsByCategoryWithInfiniteScroll } from '../../hooks/useNewsByCategoryWithInfiniteScroll'
import { newsCategories } from '../../services/newsApi/getNewsCategories'

function NewsByCategory() {
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
      <Helmet>
        <title>Noticias sobre {categoryName} | La Portada</title>
        <meta
          name="description"
          content={`"Noticias sobre ${categoryName} en La Portada. Noticias recientes y en español."`}
        />
      </Helmet>
      <ReadingAssistanceMenu getTextArray={readingAssistance_getTextArray} />
      <SimpleHeader />
      <main className="wrapper">
        <h1 style={{ marginLeft: '5px' }}>| Noticias sobre {categoryName}</h1>
        <br />
        <br />
        <NewsList
          data={data}
          isloading={loading}
          saveToHistoryWhenClicked={true}
        />
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

export default NewsByCategory
