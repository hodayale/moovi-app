import React from 'react';
import { Card, CardColumns, Col, Container, Form, Jumbotron, Row } from 'react-bootstrap';
import LiveSearchBox from './LiveSearchBox';
import MovieCard from './MovieCard';

const ActorsView = (props) => {
    const {actors} = props;
    const [filter, setFilter] = React.useState('');
    const [results, setResults] = React.useState([]);
    const [selectedMovie, setselectedMovie] = React.useState([]);

    const staticMovieJson = ["Wonder Woman", "Skylines", "Breach", "Monster Hunter"];

    const searchMovie = (searchText) => {
        if(!searchText) {
            setResults([]);
            return;
        }

        const searchResults = staticMovieJson.filter((movie) => { return movie.toLowerCase().includes(searchText.toLowerCase()); });
        setResults(searchResults);
    }

    const addMovie = (index) => {
        setResults([]);
        const movie = results[index];
        setselectedMovie(selectedMovie.concat(movie));
    }

    const actorArr = actors.map( (actor, i) => 
        <Card style={{ width: '18rem', display: actor.fullName.toLowerCase().includes(filter.toLowerCase()) ? "" : "none"}} key={i}>
            <Card.Img variant="top" src={actor.picture} />
            <Card.Body>
                <Card.Title><Card.Link href={actor.imbdLink} target="_blank">{actor.fullName}</Card.Link></Card.Title>
                <Card.Text>Age: {actor.getAge()}</Card.Text>             
            </Card.Body>
        </Card>
    );

    const movieCards = selectedMovie.map((movie, index) => {
        return <MovieCard key={index} movieName={movie}></MovieCard> 
    });

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