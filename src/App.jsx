import { useState } from 'react'
import './App.css'
import Calculadora from './components/Calculadora';

function App() {


  const [result, setResult] = useState("");
  const [param, setParam] = useState("");
  const [revisa, setRevisa] = useState("");

  return (
    <div className="App">

      <Calculadora
      param = {param}
      setParam = {setParam}
      result = {result}
      setResult = {setResult}
      revisa = {revisa}
      setRevisa = {setRevisa}
      />
    </div>
  )
}

export default App
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
