import React from 'react'
import '../App.css'


const Calculadora = ({result, setResult, param, setParam}) => {


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
    <>

    <div className='contenedor'>

    <form action=""></form>
    <input type="text" value={result}/>
  

    <div className="keypad">
      <button className="custom-btn btn-7 highlight" onClick={clear} id="clear">Clear</button>
      <button className="custom-btn btn-7" onClick={backspace} id="backspace">C</button>
      <button className="custom-btn btn-7" name="/" onClick={handleClickdiv}>&divide;</button>
 
      <button className="custom-btn btn-6" name="7" onClick={handleClick}>7</button>
      <button className="custom-btn btn-6" name="8" onClick={handleClick}>8</button>
      <button className="custom-btn btn-6" name="9" onClick={handleClick}>9</button>
      <button className="custom-btn btn-7" name="*" onClick={handleClick}>&times;</button>
      <button className="custom-btn btn-6" name="4" onClick={handleClick}>4</button>
      <button className="custom-btn btn-6" name="5" onClick={handleClick}>5</button>
      <button className="custom-btn btn-6" name="6" onClick={handleClick}>6</button>
      <button className="custom-btn btn-7" name="-" onClick={handleClick}>&ndash;</button>
      <button className="custom-btn btn-6" name="1" onClick={handleClick}>1</button>
      <button className="custom-btn btn-6" name="2" onClick={handleClick}>2</button>
      <button className="custom-btn btn-6" name="3" onClick={handleClick}>3</button>
      <button className="custom-btn btn-7" name="+" onClick={handleClick}>+</button>
      <button className="custom-btn btn-6" name="0" onClick={handleClick}>0</button>
      <button className="custom-btn btn-6" name="." onClick={handleClick}>.</button>
      <button className="custom-btn btn-7 " onClick={handleCalcular} id="result">=</button>
  </div>
  </div>


   
    </>
  )
}

export default Calculadora