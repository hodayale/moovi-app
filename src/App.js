import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import ActorsView from './Components/ActorsView';
import Actor from './data-model/Actor';

function App() {
  const actorsArr = [];
  actorsArr.push(new Actor('Patrick', 'Dempsey', '13/01/1966', 'https://www.imdb.com/name/nm0001131/?ref_=nv_sr_srsg_0', 'https://m.media-amazon.com/images/M/MV5BMTM4NzExNTAxN15BMl5BanBnXkFtZTcwNzA4MTU5MQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg'));
  actorsArr.push(new Actor('Ellen', 'Pompeo', '10/11/1969', 'https://www.imdb.com/name/nm0690186/?ref_=tt_cl_t1', 'https://m.media-amazon.com/images/M/MV5BMTI4NDc2NjA0OV5BMl5BanBnXkFtZTcwNTI1NDg1MQ@@._V1_UY317_CR10,0,214,317_AL_.jpg'));
  actorsArr.push(new Actor('Sandra', 'Ho', '20/07/1971', 'https://www.imdb.com/name/nm0644897/?ref_=tt_cl_t11', 'https://m.media-amazon.com/images/M/MV5BMTMyNzYyNDE4MV5BMl5BanBnXkFtZTcwOTkxMDQ2NA@@._V1_.jpg'));
  actorsArr.push(new Actor('Jesse', 'Williams', '05/08/1981', 'https://www.imdb.com/name/nm0930898/?ref_=tt_cl_t6', 'https://m.media-amazon.com/images/M/MV5BZTk5NmVmNjUtYTFjMi00NGYzLWFiYjYtMzE0ZDE2YTNjM2I4XkEyXkFqcGdeQXVyODgwMzQ5Ng@@._V1_.jpg'));
  actorsArr.push(new Actor('Jessica', 'Capshaw', '09/08/1976', 'https://www.imdb.com/name/nm0004800/?ref_=tt_cl_t10', 'https://m.media-amazon.com/images/M/MV5BMTUzMDUwMzMyNl5BMl5BanBnXkFtZTcwNzM0ODQ2Ng@@._V1_UY1200_CR91,0,630,1200_AL_.jpg'));
  actorsArr.push(new Actor('Kelly', 'McCreary', '10/07/1981', 'https://www.imdb.com/name/nm3691741/?ref_=tt_cl_t15', 'https://m.media-amazon.com/images/M/MV5BYzg1NDMyNTgtZGJjNS00NzgzLWI0ODItNWJmMDE0Y2IyM2RhXkEyXkFqcGdeQXVyMjIzMzk0MDA@._V1_UY1200_CR585,0,630,1200_AL_.jpg'));
  return (
    <Container>
      <ActorsView actors={actorsArr}/>
    </Container>
  );
}

export default App;
