import { Cabecalho } from "./Components/Cabecalho"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Inicio } from "./Pages/Inicio"
import { Sobre } from "./Pages/Sobre"
import { Contato } from "./Pages/Contato"

function App() {

  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        
        <Routes>
          <Route path="/" element={ <Inicio /> }></Route>
          <Route path="/sobre" element={ <Sobre /> }></Route>
          <Route path="/contato" element={ <Contato /> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
