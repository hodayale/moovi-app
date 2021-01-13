import React from 'react';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap';
import LiveSearchBox from './LiveSearchBox';

const ActorsView = (props) => {
    const {actors} = props;
    const [filter, setFilter] = React.useState('');

    const actorArr = actors.map( (actor, i) => 
        <Card style={{ width: '18rem', display: actor.fullName.toLowerCase().includes(filter.toLowerCase()) ? "" : "none"}} key={i}>
            <Card.Img variant="top" src={actor.picture} />
            <Card.Body>
                <Card.Title><Card.Link href={actor.imbdLink} target="_blank">{actor.fullName}</Card.Link></Card.Title>
                <Card.Text>Age: {actor.getAge()}</Card.Text>             
            </Card.Body>
        </Card>
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
            <LiveSearchBox placeholderText="Search an Actor" results={["Ellen", "Patrick", "Sandra"]}/>
        </Container>
    )
}

export default ActorsView;