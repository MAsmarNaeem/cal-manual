

import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const [operatorDisabled, setOperatorDisabled] = useState({
    add:false,
    sub:false,
    mul:false,
    div:false,

  });

  const handleInput = (e) => {
    const value = e.target.value;
    console.log("value is :",value);
    if (value === '+' || value === '-' || value === '*' || value === '/') {
      setOperatorDisabled(
        {
          add:value==='+'?false:true,
          sub:value==='-'?false:true,
          mul:value==='*'?false:true,
          div:value==='/'?false:true

        }
      );
    }
   
    setInput(input.concat(value));
   
  };

  const handleClear = () => {
    setInput("");
    setOperatorDisabled(false);
  };

  const handleEquals = () => {
    try {
      let expression = input.split(/(\+|\-|\*|\/)/g);
      let result = parseFloat(expression[0]);

      for (let i = 1; i < expression.length; i += 2) {
        let operator = expression[i];
        let operand = parseFloat(expression[i + 1]);

        if (operator === "+") {
          result = result + operand;
        } else if (operator === "-") {
          result = result - operand;
        } else if (operator === "*") {
          result = result * operand;
        } else if (operator === "/") {
          result = result / operand;
        }
      }
      setInput(result.toString());
    } catch (error) {
      setInput("error");
    }
    setOperatorDisabled(false);
  };

  return (
    <div>
      <input type="text" value={input} readOnly style={{ textAlign: "end" }} />
      <br />
      <button value="1" onClick={handleInput}>
        1
      </button>
      <button value="2" onClick={handleInput}>
        2
      </button>
      <button value="3" onClick={handleInput}>
        3
      </button>
      <button value="+" onClick={handleInput} disabled={operatorDisabled.add}>
        +
      </button>
      <br />
      <button value="4" onClick={handleInput}>
        4
      </button>
      <button value="5" onClick={handleInput}>
        5
      </button>
      <button value="6" onClick={handleInput}>
        6
      </button>
      <button value="-" onClick={handleInput} disabled={operatorDisabled.sub}>
        -
      </button>
      <br />
      <button value="7" onClick={handleInput}>
        7
      </button>
      <button value="8" onClick={handleInput}>
        8
      </button>
      <button value="9" onClick={handleInput}>
        9
      </button>

      <br />
      <button value="0" onClick={handleInput}>
        0
      </button>

      <button value="/" onClick={handleInput} disabled={operatorDisabled.div}>
        /
      </button>
      <button value="*" onClick={handleInput} disabled={operatorDisabled.mul}>
        X
      </button>
      <button onClick={handleClear}>C</button>
      <br />
      <button onClick={handleEquals}>=</button>
    </div>
  );
}

export default Calculator;
