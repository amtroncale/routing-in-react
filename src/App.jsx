import React, { Fragment } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Logo from './assets/logo.jpg';
import Home from './components/Home';
import Films from './components/Films';
import People from './components/People';
import Person from './components/Person';
import FilmID from './components/FilmID';

class App extends React.Component {
    render() {
        return (
            <main className="container">
                <img className="mx-auto d-block mt-3 p-3" src={Logo} alt="logo" />
                <Router>
                    <Fragment>
                        <Link to="/">
                            <button className="btn btn-light btn-outline-dark w-33 mx-auto mt-2 col-4 shadow-sm button-link" type="submit"><b>GO HOME</b></button>
                        </Link>
                        <Link to="/films">
                            <button className="btn btn-light btn-outline-dark w-33 mx-auto mt-2 col-4 shadow-sm button-link" type="submit"><b>VIEW FILMS</b></button>
                        </Link>
                        <Link to="/people">
                            <button className="btn btn-light btn-outline-dark w-33 mx-auto mt-2 col-4 shadow-sm button-link" type="submit"><b>VIEW PEOPLE</b></button>
                        </Link>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/films" component={Films} />
                            <Route exact path="/films/:id" component={FilmID} />
                            <Route exact path="/people" component={People} />
                            <Route exact path="/people/:id" component={Person} />
                        </Switch>
                    </Fragment>
                </Router>
            </main>
        );
    }
};

export default App; 