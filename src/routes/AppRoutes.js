import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer } from '../components/layout/Footer.jsx'
import Home from '../pages/Home'
import { NewsByCategory } from '../pages/NewsByCategory'
import News from './../pages/News'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destacados" element={<h1>Destacados</h1>} />
        <Route path="/noticias" element={<News />} />
        <Route path="/noticias/:category" element={<NewsByCategory />} />
        <Route path="/login" element={<h1>Login</h1>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
