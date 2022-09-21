import { useState } from 'react'
import './App.css'
import Calculadora from './components/Calculadora';

function App() {


  const [result, setResult] = useState("");
  const [param, setParam] = useState("");

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
