import './App.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import ActorsView from './Components/ActorsView';
import Actor from './data-model/Actor';
import axios from 'axios';
import { HashRouter } from 'react-router-dom';
import MovieView from './Components/MovieView';

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
      <Container>
        <ActorsView actors={actorsData}/>
        <MovieView />
      </Container>
    </HashRouter>
  );
}

export default App;
