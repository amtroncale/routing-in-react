import React from 'react';
import { Link } from 'react-router-dom';

class Films extends React.Component {
  state = {
    films: []
  }
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(movie => {
        this.setState({ films: movie });
      });
  }

  render() {
    return (
      <main className="container mx-auto d-block shadow-lg mt-3 p-1">
        <h1 className="text-center"><b>FILMS</b></h1>
        <ul className="list-group list-group-flush">
          {this.state.films.map(movie => {
            return (
              <li key={movie.id} className="list-group-item">
                <h5 className="card-title"><b>{movie.title}</b></h5>
                <p className="card-text">{movie.description}</p>
                <Link to={`/films/${movie.id}`}>FILM DETAILS</Link>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
};

export default Films;