import { useContext } from 'react'
import { newsHistoryrContext } from '../state/context/newsHistoryProvider'
import { useCurrentUser } from './auth/useCurrentUser'

export function useNewsHistory() {
  const {
    newsHistory,
    loading,
    getNewsHistory: handleg_getNewsHistory,
    addNoticiaToUserHistory: handle_addNoticiaToUserHistory,
  } = useContext(newsHistoryrContext)
  const { currentUser } = useCurrentUser()

  const userEmail = currentUser?.userProfile?.email

  const getNewsHistory = () => {
    if (userEmail) {
      handleg_getNewsHistory({ userEmail })
    }
  }

  const addNoticiaToUserHistory = ({
    title,
    url,
    description,
    source,
    author,
    urlToImage,
  }) => {
    if (userEmail) {
      handle_addNoticiaToUserHistory({
        userEmail,
        title,
        url,
        description,
        source,
        author,
        urlToImage,
      })
    }
  }

  return {
    newsHistory,
    loading,
    getNewsHistory,
    addNoticiaToUserHistory,
  }
}
