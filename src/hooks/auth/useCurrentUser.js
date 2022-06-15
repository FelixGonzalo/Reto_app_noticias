import { useContext } from 'react'
import { currentUserContext } from '../../state/context/currentUserProvider'

export function useCurrentUser() {
  const { currentUser, checkCurrentUser, isUserLoggedIn, logoutCurrentUser } =
    useContext(currentUserContext)

  const handleLogout = () => {
    logoutCurrentUser()
    localStorage.removeItem('userToken')
    localStorage.removeItem('userProfile')
  }

  return {
    currentUser,
    checkCurrentUser,
    isUserLoggedIn,
    handleLogout,
  }
}
