import './App.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import ActorsView from './Components/ActorsView';
import Actor from './data-model/Actor';
import axios from 'axios';

const App = () => {
  const [actorsData, setActorsData] = React.useState([]);

  React.useEffect(() => {
    // Runs after the first render() lifecycle
    axios.get('/actors.json').then( (res) => {
      const actors = res.data.map(actor => new Actor(actor.fname, actor.lname, actor.birthday, actor.imbdLink, actor.picture));
      setActorsData(actors);
    })
  }, []);
  
  return (
    <Container>
      <ActorsView actors={actorsData}/>
    </Container>
  );
}

export default App;
