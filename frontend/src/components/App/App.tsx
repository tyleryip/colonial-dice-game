import GlobalStyle from '../../GlobalStyle'
import Layout from '../Layout/Layout'
import GameOverModal from '../Modals/GameOverModal/GameOverModal'
import StyledApp from './styles/StyledApp'

export default function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <GameOverModal />
      <Layout />
    </StyledApp>
  )
}