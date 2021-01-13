import { Form, ListGroup } from "react-bootstrap";

const LiveSearchBox = (props) => {
    const {placeholderText, results} = props;
    
    const resultElements = results.map((item, index) => {
        return <ListGroup.Item key={index}>{item}</ListGroup.Item>
    });
    return(
        <div className="c-live-search-box">
            <Form.Control type="search" placeholder={placeholderText}/>
            <ListGroup>
                {resultElements}
            </ListGroup>
        </div>
    );
}

export default LiveSearchBox;