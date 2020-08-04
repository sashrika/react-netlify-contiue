import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [value, setValue] = useState("")

  useEffect(() => {
    fetch(".netlify/functions/node-fetch")
    .then(x => x.json())
    .then(data => setValue(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React. {value.msg}
        </a>
      </header>
    </div>
  );
}

export default App;
