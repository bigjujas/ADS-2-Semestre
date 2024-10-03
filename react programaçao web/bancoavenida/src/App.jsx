import { useState } from 'react'
import { useForm } from "react-hook-form"
import bankLogo from './assets/bank.png'
import dislike from './assets/dislike.png'
import like from './assets/like.png'
import './App.css'

function App() {
  const { register, handleSubmit, reset } = useForm()
  const [message1, setMessage1] = useState("")
  const [message2, setMessage2] = useState("")
  const [message3, setMessage3] = useState("")
  const [image, setImage] = useState()
  const [color, setColor] = useState()
  const [valorEmprestimo, setValorEmprestimo] = useState()

  function submit(data) {
    let valorEmprestimo

    const dividaForm = data.divida;
    const salario = data.salario;
    const tempoCliente = data.opcao;
    const bensCasa = data.bens1;
    const bensVeiculo = data.bens2;

    if (dividaForm === "true" && tempoCliente === "menos5" && bensCasa === false && bensVeiculo === false) {
      setMessage1(`Ops, ${data.nome}!`)
      setMessage2(`Empréstimo Nao Autorizado`)
      setMessage3(`Converse com o seu gerente`)
      setImage(dislike)
      setColor("red")
    } else if (dividaForm === "false" && tempoCliente === "mais10" && bensCasa === true && bensVeiculo === true) {
      valorEmprestimo = data.salario * 6
      setMessage1(`Parabéns, ${data.nome}!`)
      setMessage2(`Empréstimo Pré-Aprovado de R$ ${valorEmprestimo}`)
      setMessage3(`Solicite no App do Banco`)
      setImage(like)
      setColor("green")
    } else {
      valorEmprestimo = data.salario * 3
      setMessage1(`Parabéns, ${data.nome}!`)
      setMessage2(`Empréstimo Pré-Aprovado de R$ ${valorEmprestimo}`)
      setMessage3(`Solicite no App do Banco`)
      setImage(like)
      setColor("green")
    }
  }

  function limpar() {
    setMessage1("");
    setMessage2("");
    setMessage3("");
    setImage(undefined);
    setColor("");
    reset({
      nome: "",
      divida: "",
      salario: "",
      opcao: "",
      bens1: false,
      bens2: false,
    });
  }


  return (
    <>
      <header className="header">
        <img src={bankLogo} alt="" />
        <div className="header_text">
          <h1>Banco Aveninda</h1>
          <p>Controle de Empréstimos</p>
        </div>
      </header>
      <div className="app_container">
        <form className='form' onSubmit={handleSubmit(submit)} onReset={limpar}>
          <p>
            <label htmlFor="nome">Nome do Cliente: </label>
            <input type="text" id='nome' {...register("nome")} required />
          </p>
          <p>Possui Dívida Ativa:</p >
          <div className="checkbox">
            <label htmlFor="dividaTrue">
              <input id="dividaTrue" type="radio" {...register('divida')} value="true" required />
              Sim
            </label>
            <label htmlFor="dividaFalse">
              <input id="dividaFalse" type="radio" {...register('divida')} value="false" required />
              Não
            </label>
          </div>
          <p>
            <label htmlFor="salario">Salário R$: </label>
            <input type="number" id='salario' {...register("salario")} required />
          </p>
          <p>
            <label htmlFor="tempoCliente">Cliente do Banco:</label>
            <select id="tempoCliente" {...register("opcao")} required>
              <option value="">Selecione uma opção</option>
              <option value="menos5">Menos de 5 Anos</option>
              <option value="mais5">Acima de 5 Anos</option>
              <option value="mais10">Acima de 10 Anos</option>
            </select>
          </p>
          <p>Bens em seu nome:</p>
          <div className="checkbox">
            <label htmlFor="bens1">
              <input id="bens1" type="checkbox" {...register('bens1')} />
              Casa/Apto
            </label>
            <label htmlFor="bens2">
              <input id="bens2" type="checkbox" {...register('bens2')} />
              Veículo
            </label>
          </div>
          <div className="checkbox">
            <input className='botao' type="submit" value="Verificar Empréstimo"/>
            <input className='botao' type="reset" value="Limpar Dados"/>  
          </div>
        </form>
        <img src={image} alt="" className='dedo' />
        <div className={color}>
          <h1>{message1}</h1>
          <h1>{message2}</h1>
          <h1>{message3}</h1>
        </div>
      </div>
    </>
  )
}

export default App
