import { HelmetProvider } from 'react-helmet-async'
import AppRoutes from './routes/AppRoutes'
import CurrentUserProvider from './state/context/currentUserProvider'
import NewsHistoryProvider from './state/context/newsHistoryProvider'
import { SuscriptionProvider } from './state/context/suscriptionProvider'
import { ThemeProvider } from './state/context/themeProvider'

function App() {
  return (
    <ThemeProvider>
      <CurrentUserProvider>
        <SuscriptionProvider>
          <HelmetProvider>
            <NewsHistoryProvider>
              <AppRoutes />
            </NewsHistoryProvider>
          </HelmetProvider>
        </SuscriptionProvider>
      </CurrentUserProvider>
    </ThemeProvider>
  )
}

export default App
