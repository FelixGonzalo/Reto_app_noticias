import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import News from './../pages/News';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/destacados" element={<h1>Destacados</h1>} />
        <Route path="/noticias" element={<News/>} />
        <Route path="/login" element={<h1>Login</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
