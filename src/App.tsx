import { Routes, Route } from 'react-router'
import Header from './components/Header'
import Galeria from './components/Galeria'
import SerieDetalhe from './pages/SerieDetalhe'
import MensagemErro from './components/MensagemErro'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Galeria />} />
        <Route path="/serie/:id" element={<SerieDetalhe />} />
        <Route path="*" element={<MensagemErro mensagem="Página não encontrada." />} />
      </Routes>
    </>
  )
}

export default App