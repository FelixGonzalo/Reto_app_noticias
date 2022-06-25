import { HelmetProvider } from 'react-helmet-async'
import AppRoutes from './routes/AppRoutes'
import CurrentUserProvider from './state/context/currentUserProvider'
import NewsHistoryProvider from './state/context/newsHistoryProvider'
import { ThemeProvider } from './state/context/themeProvider'

function App() {
  return (
    <ThemeProvider>
      <CurrentUserProvider>
        <HelmetProvider>
          <NewsHistoryProvider>
            <AppRoutes />
          </NewsHistoryProvider>
        </HelmetProvider>
      </CurrentUserProvider>
    </ThemeProvider>
  )
}

export default App
