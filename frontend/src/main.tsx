import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/App/App.tsx'
import { persistor, store } from './store/store.ts'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/theme.ts'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <ThemeProvider theme={theme} >
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
