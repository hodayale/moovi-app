import React from 'react';
import { CardColumns, Container, Jumbotron } from 'react-bootstrap';
import axios from 'axios';
import Movie from '../data-model/Movie';
import LiveSearchBox from './LiveSearchBox';
import MovieCard from './MovieCard';

const MovieView = () => {
    const [selectedMovie, setselectedMovie] = React.useState([]);
    const [results, setResults] = React.useState([]);

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
    }

    const addMovie = (index) => {
        setResults([]);

        const movie = results[index];
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=08442e61ff4b1a9dadac378c430aabf7&append_to_response=credits`)
                .then((res) => {
                    const director = res.data.credits.crew.find(item => item.known_for_department === "Directing");
                    let mainStars = "";
                    for(let i=0; i<2; i++){
                        mainStars += res.data.credits.cast[i] !== undefined ? res.data.credits.cast[i].name + (i === 1 ? "" : ", " ): "";
                    }
                    const movie = new Movie(res.data.id, res.data.title, res.data.runtime, `https://image.tmdb.org/t/p/w200${res.data.poster_path}`, director !== undefined ? director.name : "", mainStars);
                    setselectedMovie(selectedMovie.concat(movie));
                })
    }

    const movieCards = selectedMovie.map((movie) => 
        <MovieCard id={movie.id} name={movie.name} lengthInMin={movie.lengthInMin} poster={movie.poster} director={movie.director} mainStars={movie.mainStars}/>
    );

    return(
        <Container>
            <Jumbotron className="bg-white">
                <h1 className="text-center text-secondary display-2">Movies Gallery</h1>           
            </Jumbotron>
            <LiveSearchBox placeholderText="Search a Movie" results={results}
                        searchTextChanged={searchMovie}
                        resultSelected={addMovie}/>
            <CardColumns className="c-movie-view">
                {movieCards}
            </CardColumns>
        </Container>
    );
}

export default MovieView;