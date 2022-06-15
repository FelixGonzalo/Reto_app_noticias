import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Footer } from '../components/layout/Footer.jsx'
import { useCurrentUser } from '../hooks/auth/useCurrentUser.js'
import Home from '../pages/Home'
import { Login } from '../pages/Login/index.jsx'
import { NewsByCategory } from '../pages/NewsByCategory'
import { Register } from '../pages/Register/index.jsx'
import { UserProfile } from '../pages/UserProfile/index.jsx'
import News from './../pages/News'

export default function AppRoutes() {
  const { isUserLoggedIn } = useCurrentUser()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destacados" element={<h1>Destacados</h1>} />
        <Route path="/noticias" element={<News />} />
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
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
