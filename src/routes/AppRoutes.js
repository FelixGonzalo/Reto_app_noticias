import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Footer } from '../components/layout/Footer.jsx'
import ThemeButton from '../components/ThemeButton/index.jsx'
import { useCurrentUser } from '../hooks/auth/useCurrentUser.js'
import Home from '../pages/Home'
import { Login } from '../pages/Login/index.jsx'
import { NewsByCategory } from '../pages/NewsByCategory'
import { Register } from '../pages/Register/index.jsx'
import { UserProfile } from '../pages/UserProfile/index.jsx'
import NewsBySearch from '../pages/NewsBySearch'
import NotFound from '../pages/NotFound/index.jsx'

export default function AppRoutes() {
  const { isUserLoggedIn } = useCurrentUser()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/noticias"
          element={<Navigate to="/noticias/search/actualidad" replace />}
        />
        <Route
          path="/noticias/search"
          element={<Navigate to="/noticias/search/actualidad" replace />}
        />
        <Route path="/noticias/search/:search" element={<NewsBySearch />} />
        <Route path="/noticias/:category" element={<NewsByCategory />} />
        <Route
          path="/login"
          element={isUserLoggedIn ? <Navigate to="/" replace /> : <Login />}
        />
        <Route
          path="/register"
          element={isUserLoggedIn ? <Navigate to="/" replace /> : <Register />}
        />
        <Route
          path="/usuario/perfil"
          element={
            isUserLoggedIn ? <UserProfile /> : <Navigate to="/" replace />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ThemeButton />
    </BrowserRouter>
  )
}
