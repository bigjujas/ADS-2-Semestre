import { useState } from "react"
import "./App.css"

function App() {
  const [photo, setPhoto] = useState("./src/assets/sinaleiras/vermelha.png")

  function trocaSinal() {
    // alert ("Clicou...")]
    if (photo == "./src/assets/sinaleiras/vermelha.png") {
      setPhoto("./src/assets/sinaleiras/verde.png")
    } else if (photo == "./src/assets/sinaleiras/verde.png") {
      setPhoto("./src/assets/sinaleiras/amarela.png")
    } else {
      setPhoto("./src/assets/sinaleiras/vermelha.png")
  }
  
  }
  return (
    <>
    <h1>Escola de Trânsito</h1>
    <h2>Aula Sobre sinaleiras</h2>
    <div className="sinaleiras">
      <button onClick={trocaSinal}><img src={photo} alt="" /></button>
    </div>
    <h2>Sinal Vermelho: Proibido Passar</h2>
    <h4><i>*Clique sobre a imagem para mudar o sinal</i></h4>
    </>
  )
}

export default App
