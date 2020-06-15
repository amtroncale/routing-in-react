import React from 'react';
import { Link } from 'react-router-dom';

class People extends React.Component {
  state = {
    people: []
  }
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then(res => res.json())
      .then(person => {
        this.setState({ people: person });
      });
  }

  render() {
    return (
      <main className="container mx-auto d-block shadow-lg mt-3 p-1">
        <h1 className="text-center"><b>PEOPLE</b></h1>
        <ul className="list-group list-group-flush">
          {this.state.people.map(person => {
            return (
              <li key={person.id} className="list-group-item">
                <h5 className="card-title"><b>{person.name}</b></h5>
                <Link to={`/people/${person.id}`}>MORE INFO</Link>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
};

export default People;