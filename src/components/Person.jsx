import React from 'react';

class Person extends React.Component {
    state = {
        person: ''
    }
    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people/" + this.props.match.params.id)
            .then(res => res.json())
            .then(obj => {
                this.setState({ person: obj })
            })
    }

    render() {
        return (
            <main className="container mx-auto d-block shadow-lg mt-3 p-1">
                <h1><b>{this.state.person.name}</b></h1>
                <>
                    <ul className="list-group list-group-flush m2">
                        <li className="list-group-item">GENDER: {this.state.person.gender}</li>

                        <li className="list-group-item">AGE: {this.state.person.age}</li>

                        <li className="list-group-item">EYE COLOR: {this.state.person.eye_color}</li>

                        <li className="list-group-item">HAIR COLOR: {this.state.person.hair_color}</li>

                        <li className="list-group-item">FILMS: {this.state.person.films}</li>

                        <li className="list-group-item">SPECIES: <a href={this.state.person.species} target="_blank" rel="noopener noreferrer">{this.state.person.species}</a></li>

                        <li className="list-group-item">URL: <a href={this.state.person.url} target="_blank" rel="noopener noreferrer">{this.state.person.url}</a></li>
                    </ul>
                </>
            </main>
        );
    }
};

export default Person;