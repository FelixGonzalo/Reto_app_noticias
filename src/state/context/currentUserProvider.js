import { useState, useEffect, createContext } from 'react'

export const currentUserContext = createContext()

const initialValue = {
  userToken: null,
  userProfile: null,
}

const CurrentUserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(initialValue)
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true)

  useEffect(() => {
    checkCurrentUser()
  }, [])

  const checkCurrentUser = () => {
    const userToken = localStorage.getItem('userToken')
    const userProfile = localStorage.getItem('userProfile')
    if (userToken && userProfile) {
      setCurrentUser({
        userToken: JSON.parse(userToken),
        userProfile: JSON.parse(userProfile),
      })
      setIsUserLoggedIn(true)
    } else {
      setIsUserLoggedIn(false)
    }
  }

  const logoutCurrentUser = () => {
    setCurrentUser(initialValue)
    setIsUserLoggedIn(false)
  }

  return (
    <currentUserContext.Provider
      value={{
        currentUser,
        checkCurrentUser,
        isUserLoggedIn,
        logoutCurrentUser,
      }}
    >
      {props.children}
    </currentUserContext.Provider>
  )
}

export default CurrentUserProvider
