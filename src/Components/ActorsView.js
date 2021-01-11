import React from 'react';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap';

const ActorsView = (props) => {
    const {actors} = props;
    const [filter, setFilter] = React.useState('');

    const actorArr = actors.map( (actor, i) => 
        <Card style={{ width: '18rem', display: actor.fullName.toLowerCase().includes(filter.toLowerCase()) ? "" : "none"}} key={i}>
            <Card.Img variant="top" src={actor.picture} />
            <Card.Body>
                <Card.Title className="text-center">{actor.fullName}</Card.Title>
                <Card.Text>
                Birthday: {actor.birthday}
                </Card.Text>
                <Card.Text>IMBD: <Card.Link href={actor.imbdLink}>{actor.imbdLink}</Card.Link></Card.Text>
                <Card.Text>Age: {actor.getAge()}</Card.Text>             
            </Card.Body>
        </Card>
    );

    return(
        <Container>
            <Jumbotron>
                <h1 className="text-center text-primary">Actors View</h1>           
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
        </Container>
    )
}

export default ActorsView;