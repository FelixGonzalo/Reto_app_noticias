import { createContext, useState } from 'react'
import { db } from '../../services/firebase/firebaseConfig'
import { getNewsHistory as handleGetNewsHistory } from '../../services/firebase/getNewsHistory'
import { addNoticiaToUserHistory as handleAddNoticiaToUserHistory } from '../../services/firebase/addNoticiaToUserHistory'

export const newsHistoryrContext = createContext()

const NewsHistoryProvider = (props) => {
  const [newsHistory, setNewsHistory] = useState([])
  const [loading, setLoading] = useState(false)

  const getNewsHistory = async ({ userEmail }) => {
    try {
      setLoading(true)
      const news = await handleGetNewsHistory({ db, userEmail })
      setLoading(false)
      setNewsHistory(news)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  const addNoticiaToUserHistory = async ({
    userEmail,
    title,
    url,
    description,
    source,
    author,
    urlToImage,
  }) => {
    try {
      const newsItem = await handleAddNoticiaToUserHistory({
        db,
        userEmail,
        title,
        url,
        description,
        source,
        author,
        urlToImage,
      })
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  return (
    <newsHistoryrContext.Provider
      value={{
        newsHistory,
        loading,
        getNewsHistory,
        addNoticiaToUserHistory,
      }}
    >
      {props.children}
    </newsHistoryrContext.Provider>
  )
}

export default NewsHistoryProvider
