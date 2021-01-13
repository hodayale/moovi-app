import { Card } from "react-bootstrap";

const ActorCard = (props) => {
    const {filter, keyIndex, picture, imdbLink, fullName, age} = props; 
    return(
        <Card style={{ width: '18rem', display: fullName.toLowerCase().includes(filter.toLowerCase()) ? "" : "none"}} key={keyIndex}>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
                <Card.Title><Card.Link href={imdbLink} target="_blank">{fullName}</Card.Link></Card.Title>
                <Card.Text>Age: {age}</Card.Text>             
            </Card.Body>
        </Card>
    );
}

export default ActorCard;