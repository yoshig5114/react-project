import { useState, useEffect } from "react";

export function FilmsList(props) {
  const [list, setList] = useState([]);

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
      <ul>
        {list.map((film, index) => {
          return <li key={index + film}>{film}</li>;
        })}
      </ul>
    </div>
  );
}
