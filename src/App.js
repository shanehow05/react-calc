import Calc from './components/Calc';
import './App.css';

function App() {
  return (
    <div className="container">

  <h1>Add with React!</h1>

 

  <form className="add">

    <input type="text" name="value1" />

    <span>+</span>

    <input type="text" name="value2" />

    <span>=</span>

    <h3>Addition results go here!</h3>

  </form>
  

</div>
  );
}

export default App;
