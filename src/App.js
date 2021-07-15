// import logo from './logo.svg';
import './App.css';
import './myone.css'
import Header from './Header.js'

function App() {

  function FireEvent()
  {
    window.confirm("Do you really want to confirm?")
  }

  
  return (
    <div className="App">

      <h1>H E L L O</h1>
      <h2 className="change_color">Everyone</h2>
      <Header abc="Marjan Binta Aziz" id="17103279"/>
      <Header abc="Shila Akter" id="17103265"/>
     
     <button className="button_confirm" onClick={FireEvent}>Confirm</button>
    </div>
  );
}

export default App;
