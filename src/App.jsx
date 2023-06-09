// import logo from './logo.svg';
// import './App.css';
import React from "react"
import FilmsList from './Components/filmsList'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      list:  ["ready", "set", "GO"],
      text: ""
    }
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit = (e) => {
    e.preventDefault()
    let newList = [...this.state.list,this.state.text]
    this.setState({
      list: newList, text:""
    })
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <form action="input" onSubmit={this.onSubmit}>
          <input type='text' 
          value={this.state.text} 
          onChange={(e) => {
            this.setState({
              text: e.target.value,
            })
          }}/>
          <button type='submit'>Add</button>
        </form>
        <ul>
          {this.state.list.map((string, index)=> (
            <li key={index}>
              {string}
            </li>
            ))}
        </ul>
        <FilmsList />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>React Amazed</h1>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//         React is cool!
//         </p>
//         <p>Facebook made it</p>
//         <ul>
//           <li>Zuckerberg</li>
//           <li> cannot be</li>
//           <li>over styled</li>
//         </ul>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
export default App;
