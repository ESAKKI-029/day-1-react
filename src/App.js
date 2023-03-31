import logo from './logo.svg';
import './App.css';

function App() {
  const Click=()=>
  {
    alert("LOGGED IN")
  }
  return (
    <div className="App">
      <h1>WELCOME TO THIS PAGE</h1>
<button onClick={window['alertMsg']}>ALLOW ME</button>
<h1>Message to Developer</h1>
<button onClick={window['Console']}>CLICK HERE</button>
    </div>
    
  );
}

export default App;