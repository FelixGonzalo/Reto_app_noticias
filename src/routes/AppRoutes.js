import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Footer } from '../components/layout/Footer.jsx'
import { useCurrentUser } from '../hooks/auth/useCurrentUser.js'
import Home from '../pages/Home'
import { Login } from '../pages/Login/index.jsx'
import { NewsByCategory } from '../pages/NewsByCategory'
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
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
