import { useState } from 'react'
import { useForm } from "react-hook-form"
import './App.css'
import logo from './assets/logo.jpg'

function App() {
  const { register, handleSubmit} = useForm()
  const [clienteNome, setClienteNome] = useState("")
  const [pesoPrato, setPesoPrato] = useState("")
  const [calculo, setCalculo] = useState("")

  function calcularRefeicao(data) {
    const ValorPrato = data.peso * 0.025
    setCalculo(`${(ValorPrato).toFixed(2)} 😀`)
    setClienteNome(`${data.nome} 😀`)
    setPesoPrato(`${data.peso} Gramas 😀`)
  }

  return (
    <>
    <header className="header">
      <h1>Restaurante Avenida</h1>
      <img src={logo} alt="" />
    </header>
    <div className="restaurant__container">
      <h2>Calcular Valor do Prato:</h2>
      <form onSubmit={handleSubmit(calcularRefeicao)} className='form'>
        <p>
          <label htmlFor="nome">Area do Cliente: </label>
          <input type="text" id='nome' {...register("nome")} />
        </p>
        <p>
          <label htmlFor="peso">Peso do Prato: (Gramas) </label>
          <input type="number" id='peso' {...register("peso")} />
        </p>
        <input className="button" type="submit" value="Calcular" />
        <input className="button" type="reset" value="Limpar" />
      </form>
      <h2>Cliente: {clienteNome}</h2>
      <h2>Peso do Prato: {pesoPrato}</h2>
      <h2>Valor do Prato: R${calculo}</h2>
    </div>
    </>
  )
}

export default App
