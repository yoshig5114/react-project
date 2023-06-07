import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Amazed</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        React is cool!
        </p>
        <p>Facebook made it</p>
        <ul>
          <li>Zuckerberg</li>
          <li> cannot be</li>
          <li>over styled</li>
        </ul>
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
