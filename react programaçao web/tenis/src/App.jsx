import { useState } from 'react'
import './App.css'

function App() {
  const [foto, setFoto] = useState("./src/assets/tenis1.png")

  function trocaTenis1() {
    // alert ("clicou")
    setFoto("./src/assets/tenis1.png")
  }
  function trocaTenis2() {
    // alert ("clicou")
    setFoto("./src/assets/tenis2.png")
  }
  function trocaTenis3() {
    // alert ("clicou")
    setFoto("./src/assets/tenis3.png")
  }

  return (
    <>
    <div className='quadro'>
    <h1>Calçados dos Gurizes</h1>
    <h2>Veja detalhes do tenis topzera:</h2>
    <img src={foto} alt="" className='tenisprincipal'/>
    <div className="vitrine">
      <img src="./src/assets/tenis1.png" alt="" onClick={trocaTenis1}/>
      <img src="./src/assets/tenis2.png" alt="" onClick={trocaTenis2}/>
      <img src="./src/assets/tenis3.png" alt="" onClick={trocaTenis3}/>
    </div>
    </div>
    </>
  )
}

export default App
