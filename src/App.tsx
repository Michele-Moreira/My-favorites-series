import { Routes, Route } from 'react-router'
import Header from './components/Header'
import Galeria from './components/Galeria'
import SerieDetalhe from './pages/SerieDetalhe'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Galeria />} />
        <Route path="/serie/:slug" element={<SerieDetalhe />} />
      </Routes>
    </>
  )
}

export default App