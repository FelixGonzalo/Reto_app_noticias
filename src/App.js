import { HelmetProvider } from 'react-helmet-async'
import AppRoutes from './routes/AppRoutes'
import CurrentUserProvider from './state/context/currentUserProvider'
import { ThemeProvider } from './state/context/themeProvider'

function App() {
  return (
    <ThemeProvider>
      <CurrentUserProvider>
        <HelmetProvider>
          <AppRoutes />
        </HelmetProvider>
      </CurrentUserProvider>
    </ThemeProvider>
  )
}

export default App
