import './App.css';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import ActorsView from './Components/ActorsView';
import Actor from './data-model/Actor';
import axios from 'axios';
import { HashRouter, Route } from 'react-router-dom';
import MovieView from './Components/MovieView';
import HomePage from './Components/HomePage';
import MovieDetails from './Components/MovieDetails';

const App = () => {
  const [actorsData, setActorsData] = React.useState([]);

  React.useEffect(() => {
    // Runs after the first render() lifecycle
    axios.get('/actors.json').then( (res) => {
      const actors = res.data.map(actor => new Actor(actor.fname, actor.lname, actor.birthday, actor.imdbLink, actor.picture));
      setActorsData(actors);
    })
  }, []);
  
  return (
    <HashRouter>
      <Container className="c-app">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#/">M&A Gallery</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#/actors">Actors</Nav.Link>
            <Nav.Link href="#/movies">Movies</Nav.Link>
          </Nav>
        </Navbar>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route exact path="/actors">
          <ActorsView actors={actorsData}/>
        </Route>
        <Route exact path="/movies">
          <MovieView />
        </Route>
        <Route exact path="/movies/:id">
          <MovieDetails/>
        </Route>
      </Container>
    </HashRouter>
  );
}

export default App;
