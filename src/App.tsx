import BarraLateral from './containers/BarraLateral'
import EstiloGlobal, { ContainerGlobal } from './styles'
import Main from './containers/Main'

function App() {
  return (
    <>
      <EstiloGlobal />
      <ContainerGlobal>
        <BarraLateral />
        <Main />
      </ContainerGlobal>
    </>
  )
}

export default App
