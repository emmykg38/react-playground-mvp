import React from 'react';
import ReactDOM from 'react-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


const PlaygroundDetails = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.playgroundImg}/>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
           {props.location}
           <br />
           {props.neighborhood}
          </Card.Text>
          <br />
          <ListGroup className="highlights">
            <Card.Text className="highlights-header">Highlights</Card.Text>
            <ListGroupItem>{props.listItemOne}</ListGroupItem>
            <ListGroupItem>{props.listItemTwo}</ListGroupItem>
            <ListGroupItem>{props.listItemThree}</ListGroupItem>
          </ListGroup>
          <Card.Link href={props.link}>{props.linkText}</Card.Link>
          </Card.Body>
          <Card.Body>
            <Button variant="primary">Click here for more details</Button>
          </Card.Body>
        </Card>
    );

};

export default PlaygroundDetails;