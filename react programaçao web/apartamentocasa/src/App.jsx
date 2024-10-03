import { useState } from 'react'
import './App.css'

function App() {
  const [msg, newmsg] = useState(0)

  function aparecerCasa() {
    const newmsg = "Você Selecionou Casa"
    msg(newmsg)
  }

  return (
    <>
    <h1>Imobiliaria gordao da xj6</h1>
    <h2>Qual tipo de imovel você procura?</h2>
    <div className='imagens'>
      <img src="./casa.jpg" alt="" />
      <img src="./apartamento.jpg" alt="" />
    </div>
    <h3>Você selecinou: <span className="imovel"></span></h3>
    </>
  )
}

export default App
