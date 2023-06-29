// import logo from './logo.svg';
import "./App.css";
//import { useState } from "react";
//import React from "react"
//import { FilmsList } from "./Components/filmsList";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import { HomePage, FilmsPage, SingleFilmPage } from "./pages/index.js";

function App(props) {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/films">Films</NavLink></li>
        </ul>  
      </nav>      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="films" element={<FilmsPage />} />
          <Route path="/films/film/:id" element={<SingleFilmPage />} />
        </Routes>
      
    </BrowserRouter>
  );
}



// (props) {
//   const [list, setList] = useState(["ready", "set", "GO"]);
//   const [text, setText] = useState("");

//   function handleSubmit(event) {
//     event.preventDefault();
//     setList([...list, text]);
//   }

//   return (
//     <div>
//       <h1>Hello World</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
//         <button type="submit">Add</button>
//       </form>
//       <ul>
//         {list.map((string, index) => {
//           return <li key={index + string}>{string}</li>;
//         })}
//       </ul>
//       <FilmsList />
//     </div>
//   );
// }

// {/* //
// //   return (
// //     <div className="App">
// //       <h1>React Amazed</h1>
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //         React is cool!
// //         </p>
// //         <p>Facebook made it</p>
// //         <ul>
// //           <li>Zuckerberg</li>
// //           <li> cannot be</li>
// //           <li>over styled</li>
// //         </ul>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   ); */}

export default App;
