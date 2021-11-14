import './App.css';
import { useState } from 'react';

function App() {
  const [result, setresult] = useState("0")

  const handleClick = (e) => {
    setresult(result + e.target?.name)
  }
  function clear() {
    setresult("")
  }
  function equal() {
    try {

    setresult(Number(eval(result)).toFixed(2).toString())
    }
    catch (e) {
      setresult("error")
    }

  }
  function back() {
    setresult(result.slice(0, -1))
  }


  return (
    <div className="App">
      <div className="Container">
        <div className="Header">
          <h1>React Calculator</h1>
        </div>

        <div className="Calculator">
          <div className="Display">
            <input type="text" value={result} className="Display-text">

            </input>
          </div>

          <div className="Keypad">
            <div className="Keypad-row">
              <button name="c" onClick={clear} className="Keypad-button-c">
                C
              </button>
              <button name="b" onClick={ back} className="Keypad-button-grey">
                &larr;
              </button>
              <button name="/" onClick={ handleClick} className="Keypad-button-grey">
                &divide;
              </button>

            </div>
            <div className="Keypad-row">
              <button name="7" onClick={ handleClick} className="Keypad-button-grey" >
                7
              </button>
              <button name="8" onClick={ handleClick} className="Keypad-button-grey" >
              8
              </button>
              <button name="9" onClick={ handleClick} className="Keypad-button-grey" >
                9
              </button>
              <button name="*" onClick={ handleClick} className="Keypad-button">
              X
              </button>
            </div>
            <div className="Keypad-row">
              <button name="4" onClick={ handleClick} className="Keypad-button-grey" >
                4
              </button>
              <button name="5" onClick={ handleClick} className="Keypad-button-grey">
              5
              </button>
              <button name="6" onClick={ handleClick} className="Keypad-button-grey" >
                6
              </button>
              <button name="-" onClick={ handleClick} className="Keypad-button">
                <p>-</p>
              </button>
            </div>
            <div className="Keypad-row">
              <button name="1" onClick={ handleClick} className="Keypad-button-grey" >
                1
              </button>
              <button name="2" onClick={ handleClick} className="Keypad-button-grey" >
                2
              </button>
              <button name="3" onClick={ handleClick} className="Keypad-button-grey" >
                3
              </button>
              <button name="+" onClick={ handleClick} className="Keypad-button">
              +
              </button>
            </div>
            <div className="Keypad-row">

              <button name="0" onClick={ handleClick} className="Keypad-button-0" style={{ backgroundColor: 'grey' }}>
                0
              </button>
              <button name="=" onClick={ equal} className="Keypad-button">
                =
              </button>
            </div>
          </div>
        </div>





      </div>
    </div>
  );
}

export default App;
