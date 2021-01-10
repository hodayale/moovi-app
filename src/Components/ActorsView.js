import React from 'react';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Jumbotron from 'react-bootstrap/Jumbotron'

const ActorsView = (props) => {
    const {actors} = props;
    

    const actorArr = actors.map( (actor, i) => 
        <Card style={{ width: '18rem' }} key={i}>
            <Card.Img variant="top" src={actor.picture} />
            <Card.Body>
                <Card.Title>{actor.fname} {actor.lname}</Card.Title>
                <Card.Text>
                Birthday: {actor.birthday}
                </Card.Text>
                <Card.Text>IMBD: <Card.Link href={actor.imbdLink}>{actor.imbdLink}</Card.Link></Card.Text>
                <Card.Text>Age: {actor.getAge()}</Card.Text>             
            </Card.Body>
        </Card>
    );

    return(
        <div>
        <Jumbotron>
            <h1>Actors View</h1>
        </Jumbotron>
        <CardColumns>
            {actorArr}
        </CardColumns>
        </div>
    )
}

export default ActorsView;