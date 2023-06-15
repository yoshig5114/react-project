import { useState, useEffect } from "react";
import { filterFilmsByDirector, getListOf } from "../helpers/films.helpers";

export function FilmsPage(props) {
  const [list, setList] = useState([]);
  const [searchDirector, setSearchDirector] = useState("");

  function getFilms() {
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then((response)=>{
          return response.json();
        
      })
      .then((data)=>{
        //console.log(data[0].title);
        
        setList(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    getFilms();
  }, []);

  let filmsByDirector = filterFilmsByDirector(list, searchDirector);
  let directors = getListOf(list, "director");

  return (
    <div>
        <h1>Studio Ghibli Films</h1>
        <form>
                <label htmlFor="searchDirector">Filter By Director</label>
                    <select
                       name="searchDirector" id="searchDirector" value={searchDirector} 
                       onChange={(e) => setSearchDirector(e.target.value)}
                       >
                           <option value="">All</option>
                           {directors.map((director, index) => {
                               return(
                                <option key={director + index} value={director}>
                                {director}
                                </option>
                           )})}
                       </select>
        </form>
      <ul>
        {filmsByDirector.map((film) => {
          return <li key={film.id}>{film.title}</li>;
        })}
      </ul>
    </div>
  );
}
