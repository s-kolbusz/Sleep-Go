import React from 'react';
import house from '../../assets/house.png';
import { Button, Card } from 'react-bootstrap';

import classes from './Object.module.css';

const object = (props) => (
    <Card className={classes.Object} >
        <Card.Img variant="top" src={house} alt="house" />
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
                {props.city}
            </Card.Text>
            <Button variant="primary" onClick={props.clicked}>Zobacz więcej</Button>
        </Card.Body>
    </Card>
);

export default object;