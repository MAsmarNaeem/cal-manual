import "./App.css";
import { useState } from "react";
import Calculaor from "./Calculaor";

function App() {
  const [input, setinput] = useState("");

  const handler = (e) => {
    setinput(input.concat(e.target.value));
  };

  console.log("input :", input);

  const clearhandler = () => {
    setinput("");
  };
  const backhandler = () => {
    setinput(input.slice(0, input.length - 1));
  };

  const resulthandler = () => {
    try {
      setinput(eval(input).toString());
    } catch (error) {
      setinput("Error");
    }
  };

  return (
    <div className="app">
      <div className="box1">
        <div>
          <input className="input" value={input} type="text" />
        </div>
        <div className="keypad">
          <div className="B1">
            <button onClick={handler} value="1" className="B">
              1
            </button>
            <button className="B" onClick={handler} value="2">
              2
            </button>
            <button className="B" onClick={handler} value="3">
              3
            </button>
            <button className="B" onClick={backhandler}>
              d
            </button>

            <button className="B" onClick={handler} value="4">
              {" "}
              4
            </button>
            <button className="B" onClick={handler} value="5">
              5
            </button>
            <button className="B" onClick={handler} value="6">
              6
            </button>
            <button className="B" onClick={clearhandler}>
              c
            </button>

            <button className="B" onClick={handler} value="7">
              7
            </button>
            <button className="B" onClick={handler} value="8">
              8
            </button>

            {/* </div>
              <div className='B1'>  */}
            <button className="B" onClick={handler} value="9">
              9
            </button>
            <button className="B" onClick={resulthandler}>
              =
            </button>

            <button className="B" onClick={handler} value="+">
              +
            </button>
            <button className="B" onClick={handler} value="0">
              0
            </button>
            <button className="B" onClick={handler} value="-">
              -
            </button>

            <button className="B" onClick={handler} value="/">
              /
            </button>
            <button className="B" onClick={handler} value="*">
              x
            </button>
          </div>
        </div>
      </div>
      <Calculaor />
    </div>
  );
}

export default App;
