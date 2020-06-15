import React from 'react';

class FilmID extends React.Component {
  state = {
    movie: ''
  }
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films/" + this.props.match.params.id)
      .then(res => res.json())
      .then(obj => {
        this.setState({ movie: obj })
      })
  }

  render() {
    return (
      <main className="container mx-auto d-block shadow-lg mt-3 p-1">
        <h1><b>{this.state.movie.title}</b></h1>
        <>
          <ul className="list-group list-group-flush m2">
            <li className="list-group-item">DESCRIPTION: {this.state.movie.description}</li>

            <li className="list-group-item">DIRECTOR: {this.state.movie.director}</li>

            <li className="list-group-item">PRODUCER: {this.state.movie.producer}</li>

            <li className="list-group-item">RELEASED: {this.state.movie.release_date}</li>

            <li className="list-group-item">ROTTEN TOMATOES SCORE: {this.state.movie.rt_score}</li>

            <li className="list-group-item">PEOPLE IN THIS FILM: <a href={this.state.movie.people} target="_blank" rel="noopener noreferrer">{this.state.movie.people}</a></li>

            <li className="list-group-item">SPECIES: <a href={this.state.movie.species} target="_blank" rel="noopener noreferrer">{this.state.movie.species}</a></li>

            <li className="list-group-item">LOCATIONS: <a href={this.state.movie.locations} target="_blank" rel="noopener noreferrer">{this.state.movie.locations}</a></li>

            <li className="list-group-item">URL: <a href={this.state.movie.url} target="_blank" rel="noopener noreferrer">{this.state.movie.url}</a></li>
          </ul>
        </>

      </main>
    )
  }
};

export default FilmID;