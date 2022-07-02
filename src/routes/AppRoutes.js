import { lazy, Suspense } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from 'react-router-dom'
import { Loader } from '../components/loaders/Loader'
import { useCurrentUser } from '../hooks/auth/useCurrentUser.js'
import { NewsHistory } from '../pages/NewsHistory'

const Home = lazy(() => import('../pages/Home'))
const Login = lazy(() => import('../pages/Login'))
const NewsByCategory = lazy(() => import('../pages/NewsByCategory'))
const Register = lazy(() => import('../pages/Register'))
const UserProfile = lazy(() => import('../pages/UserProfile'))
const NewsBySearch = lazy(() => import('../pages/NewsBySearch'))
const NotFound = lazy(() => import('../pages/NotFound'))
const NotAuthorized = lazy(() => import('../pages/NotAuthorized'))
const Subscription = lazy(() => import('../pages/Subscription'))
const Data = lazy(() => import('../pages/Subscription/Data'))
const Exito = lazy(() => import('../pages/Subscription/Exito'))
const ExitoPremium = lazy(() => import('../pages/Subscription/ExitoPremium'))

const ThemeButton = lazy(() => import('../components/ThemeButton'))
const Footer = lazy(() => import('../components/layout/Footer'))

export default function AppRoutes() {
  const { isUserLoggedIn } = useCurrentUser()

  return (
    <Suspense fallback={<Loader />}>
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
          <Route
            path="/noticias/reload/:data"
            element={<ReloadPage baseURL={'/noticias'} />}
          />
          <Route path="/noticias/:category" element={<NewsByCategory />} />
          <Route
            path="/noticias/historial"
            element={isUserLoggedIn ? <NewsHistory /> : <NotAuthorized />}
          />
          <Route
            path="/login"
            element={
              isUserLoggedIn ? (
                <Navigate to="/usuario/perfil" replace />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/register"
            element={
              isUserLoggedIn ? (
                <Navigate to="/usuario/perfil" replace />
              ) : (
                <Register />
              )
            }
          />
          <Route
            path="/usuario/perfil"
            element={isUserLoggedIn ? <UserProfile /> : <NotAuthorized />}
          />
          <Route
            path="/usuario/suscripcion"
            element={isUserLoggedIn ? <Subscription /> : <NotAuthorized />}
          />
           <Route
            path="/usuario/suscripcion/data"
            element={isUserLoggedIn ? <Data /> : <NotAuthorized />}
          />
          <Route
            path="/usuario/suscripcion/data/exito"
            element={isUserLoggedIn ? <Exito /> : <NotAuthorized />}
          />
          <Route
            path="/usuario/suscripcion/data/exitoPremium"
            element={isUserLoggedIn ? <ExitoPremium /> : <NotAuthorized />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ThemeButton />
      </BrowserRouter>
    </Suspense>
  )
}

function ReloadPage({ baseURL }) {
  let { data } = useParams()
  return <Navigate to={`${baseURL}/${data}`} replace />
}
