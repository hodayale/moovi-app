import React from 'react';
import { Container, Jumbotron } from "react-bootstrap";

const HomePage = () => {
    return(
        <Container>
            <Jumbotron className="bg-white">
                <h1 className="text-center text-secondary display-2">Welcome to the Movie & Actor Gallery</h1>           
            </Jumbotron>
        </Container>
    );
}
export default HomePage;