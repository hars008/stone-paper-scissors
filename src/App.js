import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" width="329" height="313">
          <path
            fill="none"
            stroke="#000"
            stroke-width="15"
            d="M164.5 9.27L9.26 122.06l59.296 182.495h191.888L319.74 122.06 164.5 9.271z"
            opacity=".2"
          />
        </svg>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
