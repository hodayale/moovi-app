import { Card } from "react-bootstrap";

const MovieCard = (props) => {
    const {id, name, lengthInMin, poster, director, mainStars} = props;
    return(
        <Card style={{ width: '18rem'}} key={id}>
            <Card.Img variant="top" src={poster} />
            <Card.Body>
                <Card.Title className="text-primary">{name}</Card.Title>   
                <Card.Text className="font-weight-bold">Length: <span className="font-italic font-weight-normal">{lengthInMin} minutes</span></Card.Text> 
                <Card.Text className="font-weight-bold">Director: <span className="font-italic font-weight-normal">{director}</span></Card.Text> 
                <Card.Text className="font-weight-bold">Main Stars: <span className="font-italic font-weight-normal">{mainStars}</span></Card.Text>         
            </Card.Body>
        </Card>
    );
}

export default MovieCard;