import AppRoutes from './routes/AppRoutes'
import CurrentUserProvider from './state/context/currentUserProvider'
import { ThemeProvider } from './state/context/themeProvider'

function App() {
  return (
    <ThemeProvider>
      <CurrentUserProvider>
        <AppRoutes />
      </CurrentUserProvider>
    </ThemeProvider>
  )
}

export default App
