import { Form, ListGroup } from "react-bootstrap";
import './LiveSearchBox.css'
import React from 'react';

const LiveSearchBox = (props) => {
    const {placeholderText, results, searchTextChanged} = props;
    const [searchText, setSearchText] = React.useState('');
    
    const resultElements = results.map((item, index) => {
        return <ListGroup.Item key={index}>{item}</ListGroup.Item>
    });
    const handleInputChange = (e) => {
        setSearchText(e.target.value);
        searchTextChanged(e.target.value);
    }
    return(
        <div className="c-live-search-box">
            <Form.Control type="search" placeholder={placeholderText}
                    onChange={handleInputChange}
                    value={searchText}/>
            <ListGroup className="search-results">
                {resultElements}
            </ListGroup>
            <p>This should be hidden</p>
        </div>
    );
}

export default LiveSearchBox;