import React from 'react';
import ReactDOM from 'react-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const PlaygroundDetails = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.playgroundImg}/>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
           {props.location}
           <br></br>
           <br></br>
           {props.neighborhood}
          </Card.Text>
          <Button variant="primary">Click here for more details</Button>
        </Card.Body>
      </Card>
    );

};

export default PlaygroundDetails;