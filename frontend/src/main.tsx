import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/reactjs-popup.css'
import App from './components/App/App.tsx'
import { store } from './store/store.ts'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme} >
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
