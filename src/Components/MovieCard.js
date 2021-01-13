import { Card } from "react-bootstrap";

const MovieCard = (props) => {
    const {id, name, lengthInMin, poster, director, mainStars} = props;
    return(
        <Card style={{ width: '18rem'}} key={id}>
            <Card.Img variant="top" src={poster} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>   
                <Card.Text>Length in minutes: {lengthInMin}</Card.Text> 
                <Card.Text>Director: {director}</Card.Text> 
                <Card.Text>Main Stars: {mainStars}</Card.Text>         
            </Card.Body>
        </Card>
    );
}

export default MovieCard;