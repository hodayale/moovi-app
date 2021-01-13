import './ActorsView.css'
import axios from 'axios';
import React from 'react';
import { CardColumns, Col, Container, Form, Jumbotron, Row } from 'react-bootstrap';
import Movie from '../data-model/Movie';
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
                    const namesAndId = res.data.results.map((item) => {return {name: item.title, id: item.id}});
                    setResults(namesAndId);
                });

        // const searchResults = staticMovieJson.filter((movie) => { return movie.toLowerCase().includes(searchText.toLowerCase()); });
        // setResults(searchResults);
    }

    const addMovie = (index) => {
        setResults([]);

        const movie = results[index];
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=08442e61ff4b1a9dadac378c430aabf7&append_to_response=images,credits`)
                .then((res) => {
                    const director = res.data.credits.crew.find(item => item.known_for_department === "Directing");
                    let mainStars = "";
                    for(let i=0; i<2; i++){
                        mainStars += res.data.credits.cast[i] != undefined ? res.data.credits.cast[i].name + (i === 1 ? "" : ", " ): "";
                    }
                    //const star = res.data.credits.cast[0] != undefined ? res.data.credits.cast[0].name : "";
                    const movie = new Movie(res.data.id, res.data.title, res.data.runtime, `https://image.tmdb.org/t/p/w200${res.data.poster_path}`, director != undefined ? director.name : "", mainStars);
                    setselectedMovie(selectedMovie.concat(movie));
                })
        // setselectedMovie(selectedMovie.concat(movie));
    }

    const actorArr = actors.map( (actor, i) => 
        <ActorCard filter={filter} keyIndex={i} picture={actor.picture} imdbLink={actor.imdbLink} fullName={actor.fullName} age={actor.getAge()}/>
    );

    const movieCards = selectedMovie.map((movie, index) => 
        <MovieCard id={movie.id} name={movie.name} lengthInMin={movie.lengthInMin} poster={movie.poster} director={movie.director} mainStars={movie.mainStars}/>
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
            <CardColumns className="c-movie-view">
                {movieCards}
            </CardColumns>
            
        </Container>
    )
}

export default ActorsView;