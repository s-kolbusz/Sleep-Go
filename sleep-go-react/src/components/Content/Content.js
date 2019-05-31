import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import classes from './Content.module.css';
import { Link } from 'react-router-dom';

const content = (props) => {
    return (
        <div>
            {/*Main form of web app, allow search objects from database*/}
            <Card className={classes.SearchForm}>
                <Card.Header>Sleep & Go</Card.Header>
                <Card.Body>
                    <Card.Title>Znajdź swój wymarzony obiekt</Card.Title>
                    <Form>
                        <Form.Group controlId="searchLocality">
                            <Form.Label>Miejscowość</Form.Label>
                            <Form.Control type="search" placeholder="Wprowadź nazwę miejscowości" />
                        </Form.Group>
                        <Form.Group controlId="setDate">
                            <Form.Label>Data przyjazdu</Form.Label>
                            <Form.Control type="date" />
                            <Form.Label>Data wyjazdu</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                        <Form.Group controlId="selectNumberOfPeople">
                            <Form.Label>Określ liczbę osób</Form.Label>
                            <Form.Control as="select">
                                <option>1 osoba</option>
                                <option>2 osoby</option>
                                <option>3 osoby</option>
                                <option>4 osoby</option>
                                <option>5 osób</option>
                                <option>6 osób</option>
                                <option>7 osób</option>
                                <option>8 osób lub więcej</option>
                            </Form.Control>
                        </Form.Group>
                        {props.signedIn ?
                            <Button variant="primary" type="submit"> Szukaj </Button> :
                            <Link to='/login'><Button variant="primary" type="submit"> Szukaj </Button></Link>}

                    </Form>
                </Card.Body>

            </Card>

        </div>
    )
};
export default content;