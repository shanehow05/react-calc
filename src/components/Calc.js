import { useState } from "react";

function Calculator() {
  const [expression, setExpression] = useState({
    val1: 0,
    val2: 0,
    operation: "+",
    result: 0,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setExpression((prevExpression) => ({
      ...prevExpression,
      [name]: parseInt(value),
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { val1, val2, operation, result } = expression;
    switch (operation) {
      case "+":
        setExpression((prevExpression) => ({
          ...prevExpression,
          result: (val1 + val2).toLocaleString(),
        }));
        break;
      case "-":
        setExpression((prevExpression) => ({
          ...prevExpression,
          result: (val1 - val2).toLocaleString(),
        }));
        break;
      case "x":
        setExpression((prevExpression) => ({
          ...prevExpression,
          result: (val1 * val2).toLocaleString(),
        }));
        break;
      case "/":
        setExpression((prevExpression) => ({
          ...prevExpression,
          result: (val1 / val2).toLocaleString(),
        }));
        break;
    }
  }

  function changeOperation(event) {
    const { val1, val2, operation, result } = expression;

    setExpression((prevExpression) => ({
      ...prevExpression,
      operation: event.target.value,
    }));
  }

  console.log(expression);

  return (
    <div className="container">
      <h1>Add with React!</h1>

      <form className="add" onSubmit={handleSubmit}>
        <div className="math-expression">
          <input type="text" name="val1" onChange={handleChange} />

          <div className="operation-symbol">{expression.operation}</div>

          <input type="text" name="val2" onChange={handleChange} />

          <span>=</span>
        </div>

        <div className="operations">
          <label htmlFor="+">
            <input
              type="radio"
              id="+"
              value="+"
              name="operation"
              onChange={changeOperation}
            />
          </label>
          <label htmlFor="−">
            <input
              type="radio"
              id="−"
              value="-"
              name="operation"
              onChange={changeOperation}
            />
          </label>
          <label htmlFor="⨉">
            <input
              type="radio"
              id="⨉"
              value="x"
              name="operation"
              onChange={changeOperation}
            />
          </label>
          <label htmlFor="÷">
            <input
              type="radio"
              id="÷"
              value="/"
              name="operation"
              onChange={changeOperation}
            />
          </label>
        </div>

        <button>Evaluate</button>

        <h3>{expression.result}</h3>
      </form>
    </div>
  );
}

export default Calculator;
