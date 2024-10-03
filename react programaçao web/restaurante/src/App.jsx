import { useState } from "react"
import "./App.css"

function App() {
  const [mesas, setMesas] = useState(10)

  function entradaCliente() {
    // alert("Entrou")
    const num = mesas - 1
    setMesas(num)
  }

  function saidaCliente() {
    // alert("Saiu")
    const num = mesas + 1
    setMesas(num)
  }

  return (
    <>
      <h1>Restaurante Avenida</h1>
      <h2>Controle de Mesas</h2>
      <img src="./restaurante.jpeg" alt="restaurante" className="imagem"/>
      <h3>Mesas Disponiveis: <span className="azul">{mesas}</span> - Mesas Ocupadas: <span className="vermelho">{10-mesas}</span></h3>
      <button onClick={entradaCliente}>Entrada de Cliente</button>
      <button onClick={saidaCliente}>Saida de Cliente</button>
    </>
  )
} 

export default App
