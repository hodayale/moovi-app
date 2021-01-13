import axios from 'axios';
import React from 'react';
import { CardColumns, Col, Container, Form, Jumbotron, Row } from 'react-bootstrap';
import ActorCard from './ActorCard';
import LiveSearchBox from './LiveSearchBox';
import MovieCard from './MovieCard';

const ActorsView = (props) => {
    const {actors} = props;
    const [filter, setFilter] = React.useState('');
    const [results, setResults] = React.useState([]);
    const [selectedMovie, setselectedMovie] = React.useState([]);

    //const staticMovieJson = ["Wonder Woman", "Skylines", "Breach", "Monster Hunter"];

    const searchMovie = (searchText) => {
        if(!searchText) {
            setResults([]);
            return;
        }

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=08442e61ff4b1a9dadac378c430aabf7&query=${searchText}`)
                .then((res) => {
                    const names = res.data.results.map((item) => item.title);
                    debugger;
                    setResults(names);
                });

        // const searchResults = staticMovieJson.filter((movie) => { return movie.toLowerCase().includes(searchText.toLowerCase()); });
        // setResults(searchResults);
    }

    const addMovie = (index) => {
        setResults([]);
        const movie = results[index];
        setselectedMovie(selectedMovie.concat(movie));
    }

    const actorArr = actors.map( (actor, i) => 
        <ActorCard filter={filter} keyIndex={i} picture={actor.picture} imdbLink={actor.imdbLink} fullName={actor.fullName} age={actor.getAge()}/>
    );

    const movieCards = selectedMovie.map((movie, index) => 
        <MovieCard key={index} movieName={movie}/>
    );

    return(
        <Container>
            <Jumbotron className="bg-white">
                <h1 className="text-center text-secondary display-2">Actors Gallery</h1>           
            </Jumbotron>
            <Form>
                <Form.Group as={Row} controlId="formPlaintextFilter">
                    <Form.Label column sm="1">
                        Filter
                    </Form.Label>
                    <Col sm="4">
                        <Form.Control type="text" onChange={(e) => setFilter(e.target.value)}/>
                    </Col>
                </Form.Group>
            </Form>    
            <CardColumns>
                {actorArr}
            </CardColumns>
            <LiveSearchBox placeholderText="Search a Movie" results={results}
                        searchTextChanged={searchMovie}
                        resultSelected={addMovie}/>
            <CardColumns>
                {movieCards}
            </CardColumns>
            
        </Container>
    )
}

export default ActorsView;