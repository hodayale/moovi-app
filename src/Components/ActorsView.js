import './ActorsView.css'
import React from 'react';
import { CardColumns, Col, Container, Form, Jumbotron, Row } from 'react-bootstrap';
import ActorCard from './ActorCard';

const ActorsView = (props) => {
    const {actors} = props;
    const [filter, setFilter] = React.useState('');

    const actorArr = actors.map( (actor, i) => 
        <ActorCard filter={filter} keyIndex={i} picture={actor.picture} imdbLink={actor.imdbLink} fullName={actor.fullName} age={actor.getAge()}/>
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
        </Container>
    )
}

export default ActorsView;