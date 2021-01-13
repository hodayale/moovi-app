import { Card } from "react-bootstrap";

const MovieCard = (props) => {
    const {movieName, keyIndex} = props;
    return(
        <Card style={{ width: '18rem'}} key={keyIndex}>
            {/* <Card.Img variant="top" src={actor.picture} /> */}
            <Card.Body>
                <Card.Title>{movieName}</Card.Title>             
            </Card.Body>
        </Card>
    );
}

export default MovieCard;