import axios from "axios";
import React from "react";
import { Col, Container, Image, Jumbotron, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Movie from "../data-model/Movie";

const MovieDetails = () => {
    const [selectedMovie, setselectedMovie] = React.useState({});
    const {id} = useParams();

    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=08442e61ff4b1a9dadac378c430aabf7&append_to_response=credits`)
        .then((res) => {
            const director = res.data.credits.crew.find(item => item.known_for_department === "Directing");
            let mainStars = "";
            for(let i=0; i<2; i++){
                mainStars += res.data.credits.cast[i] !== undefined ? res.data.credits.cast[i].name + (i === 1 ? "" : ", " ): "";
            }
            const movie = new Movie(res.data.id, res.data.title, res.data.runtime, `https://image.tmdb.org/t/p/w500${res.data.poster_path}`, director !== undefined ? director.name : "", mainStars);
            setselectedMovie(movie);
        })

    return(
        <Container>
            <Jumbotron className="bg-white">
                <h1 className="text-center text-secondary display-2">{selectedMovie.name}</h1>           
            </Jumbotron>
            <Row>
                <Col xs={6} md={4}>
                    <Image src={selectedMovie.poster} thumbnail />
                </Col>
                <Col>
                    <p className="font-weight-bold">Length: <span className="font-italic font-weight-normal">{selectedMovie.lengthInMin} minutes</span></p> 
                    <p className="font-weight-bold">Director: <span className="font-italic font-weight-normal">{selectedMovie.director}</span></p> 
                    <p className="font-weight-bold">Main Stars: <span className="font-italic font-weight-normal">{selectedMovie.mainStars}</span></p>     
                </Col>
            </Row>
        </Container>
    );
}

export default MovieDetails;