import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './RenderPlaygroundCard';
import './PlaygroundObjects'; 


const CardItem = ({ playgroundObjects }) => {

    const [activeIndex, setActiveIndex] = useState(null);


    const onPlaygroundClick = (index) => {
        //click
    };


    const renderCard = playgroundObjects.map(props => {
        return (
            <Card className="row">
            <Card.Img className="playground-image" variant="top" src={props.playgroundImg} style = {{ width: '22rem' }}/>
                <Card.Body>
                <Card.Title className="title">{props.name}</Card.Title>
                <Card.Text className="location">
                {props.location}
                <br />
                {props.neighborhood}
                </Card.Text>
                <br />
                <ListGroup className="highlights">
                <Card.Text className="highlights-header">Highlights</Card.Text>
                <ListGroupItem className="highlights-item">{props.listItemOne}</ListGroupItem>
                <ListGroupItem className="highlights-item">{props.listItemTwo}</ListGroupItem>
                <ListGroupItem className="highlights-item">{props.listItemThree}</ListGroupItem>
                </ListGroup>
                <Card.Link href={props.link}>{props.linkText}</Card.Link>
                </Card.Body>

                <Card.Body>
                    <Button variant="primary">Click here for more details</Button>
                </Card.Body>
            </Card>
        )
    });

}


export default CardItem;