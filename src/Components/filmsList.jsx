import { Component } from "react";

export default class FilmsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  getFilms() {
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
      .then((response) => {
        let dataObj = response.json();
        return dataObj;
      })
      .then((data) => {
        console.log(data[0].title);
        let newArr = [];
        for (let i = 0; i < data.length; i++) {
          newArr.push(data[i].title);
        }
        this.setState({ list: newArr });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getFilms();
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((type, index) => {
            return <li key={index + type}>{type}</li>;
          })}
        </ul>
      </div>
    );
  }
}
