import { useState } from 'react'
import './App.css'
import Calculadora from './components/Calculadora';

function App() {


  const [result, setResult] = useState("");
  const [param, setParam] = useState("");


  const handleClick = (e) => {
  
    setResult(result.concat(e.target.name));
    setParam(param.concat(e.target.name));
  }

  const handleClickdiv = (e) => {
    setResult(result.concat(e.target.name));  
    setParam(result.concat("%2F"));
  }

  const clear = () => {
    setResult("");
    setParam("");  
}

  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
    setParam(param.slice(0, result.length - 1));
  }


  const handleCalcular = async (e) => {
    e.preventDefault();
    console.log(param);
    console.log("Calculo de la expresion: ", param);

    try{
      const res = await fetch(`http://localhost:4000/calcular/${param}`);
      const calc = await res.json();

      setResult(calc.total);
      console.log(calc);
    
  } catch(error){
    console.log(error);
  }
  };

  return (
    <div className="App">

      <Calculadora
      param = {param}
      setParam = {setParam}
      result = {result}
      setResult = {setResult}
      />
    </div>
  )
}

export default App
