import Layout from '../Layout/Layout'
import GameOverModal from '../Modals/GameOverModal/GameOverModal'
import Navbar from '../Navbar/Navbar'
import StyledApp from './styles/StyledApp'

export default function App() {
  return (
    <StyledApp>
      <GameOverModal />
      <Navbar />
      <Layout />
    </StyledApp>
  )
}