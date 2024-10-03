import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import './App.css'

import logo from './assets/logo.png'
import uno from './assets/uno.jpg'
import toro from './assets/toro.png'
import spider from './assets/spider.jpg'

function App() {
  const { register, watch } = useForm();
  const [car, setCar] = useState(uno)
  const [baseCarPrice, setBaseCarPrice] = useState(20000)
  const [carPrice, setCarPrice] = useState(20000)

  const carBox1 = watch("carBox1")
  const carBox2 = watch("carBox2")
  const carBox3 = watch("carBox3")

  const selectedCar = watch('carSelection')
  const option1 = watch('option1', false)
  const option2 = watch('option2', false)

  useEffect(() => {
    if (selectedCar === 'carBox1') {
      setCar(uno);
      setBaseCarPrice(20000);
    } else if (selectedCar === 'carBox2') {
      setCar(toro);
      setBaseCarPrice(80000);
    } else if (selectedCar === 'carBox3') {
      setCar(spider);
      setBaseCarPrice(120000);
    }
  }, [selectedCar]);

  useEffect(() => {
    let extrasPrice = 0;

    if (option1) {
      extrasPrice += 1200;
    }
    if (option2) {
      extrasPrice += 2000;
    }

    setCarPrice(baseCarPrice + extrasPrice);
  }, [baseCarPrice, option1, option2]);
  

  return (
    <>
    <header className="header">
      <img src={logo} alt="" />
      <div className="header__text">
        <h1>Revenda Avenina</h1>
        <p>Veículos em Promoção</p>
      </div>
    </header>
    <div className="main__page">
      <div className="checkbox__car">
        <h1>Modelos em Promoção</h1>
          <label>
          <input type="radio" {...register('carSelection')} value="carBox1" />
          Uno
          </label>
          <label>
          <input type="radio" {...register('carSelection')} value="carBox2" />
          Toro
          </label>
          <label>
          <input type="radio" {...register('carSelection')} value="carBox3" />
          Spider
          </label>
      </div>
      <img src={car} alt="" />
      <div className="checkbox__extras">
        <h1>Selecione os Opcionais:</h1>
        <label>
        <input type="checkbox" {...register('option1')} />
        Alarme
        </label>
        <label>
        <input type="checkbox" {...register('option2')} />
        Vidros Elétricos
        </label>
      </div>
    </div>
      <footer className="footer">
        <h1>Preço do Veículo: R${carPrice}</h1>
        <h2>*Consulte condições de pagamento</h2>
      </footer>
    </>
  )
}

export default App
