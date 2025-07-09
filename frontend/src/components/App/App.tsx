import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from '../Navbar/Navbar'
import StyledApp from './styles/StyledApp'
import IslandOne from '../IslandOne/IslandOne'
import IslandTwo from '../IslandTwo/IslandTwo'

export default function App() {
  return (
    <StyledApp>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IslandOne />} />
          <Route path="/island-2" element={<IslandTwo />} />
        </Routes>
      </BrowserRouter>
    </StyledApp>
  )
}