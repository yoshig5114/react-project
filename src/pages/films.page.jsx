import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
        let newArr = [];
        for (let i = 0; i < data.length; i++) {
          newArr.push(data[i].title);
        }
        setList(newArr);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <div>
        <h1>Studio Ghibli Films</h1>
        <form action="">
            <div className="form-group">
                <label>
                    <select name="" id="" value={searchDirector} 
                       onChange={(e) => setSearchDirector(e.target.value)}
                       option value="">All</select>
                </label>
            </div>
        </form>
      <ul>
        {list.map((film, index) => {
          return <li key={index + film}>{film}</li>;
        })}
      </ul>
    </div>
  );
}
