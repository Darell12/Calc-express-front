import React from 'react'


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

    <div className='container'>

    <form action=""></form>
    <input type="text" value={result}/>
  </div>

    <div className="keypad">
      <button className="highlight" onClick={clear} id="clear">Clear</button>
      <button className="highlight" onClick={backspace} id="backspace">C</button>
      <button className="highlight" name="/" onClick={handleClickdiv}>&divide;</button>
 
      <button name="7" onClick={handleClick}>7</button>
      <button name="8" onClick={handleClick}>8</button>
      <button name="9" onClick={handleClick}>9</button>
      <button className="highlight" name="*" onClick={handleClick}>&times;</button>
      <button name="4" onClick={handleClick}>4</button>
      <button name="5" onClick={handleClick}>5</button>
      <button name="6" onClick={handleClick}>6</button>
      <button className="highlight" name="-" onClick={handleClick}>&ndash;</button>
      <button name="1" onClick={handleClick}>1</button>
      <button name="2" onClick={handleClick}>2</button>
      <button name="3" onClick={handleClick}>3</button>
      <button className="highlight" name="+" onClick={handleClick}>+</button>
      <button name="0" onClick={handleClick}>0</button>
      <button name="." onClick={handleClick}>.</button>
      <button className="highlight" onClick={handleCalcular} id="result">=</button>
  </div>


   
    </>
  )
}

export default Calculadora