import AppRoutes from './routes/AppRoutes'
import CurrentUserProvider from './state/context/currentUserProvider'

function App() {
  return (
    <CurrentUserProvider>
      <AppRoutes />
    </CurrentUserProvider>
  )
}

export default App
