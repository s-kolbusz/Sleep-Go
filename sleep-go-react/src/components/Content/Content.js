import React from 'react';
import { Form, Button } from 'react-bootstrap';
import classes from './Content.module.css';

const content = (props) => {
    return (
        <div>
            <h1>Sleep & Go</h1>
            <Form className={classes.SearchForm}>
                <Form.Group controlId="searchLocality">
                    <Form.Label>Wyszukaj miejscowość</Form.Label>
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
                <Button variant="primary" type="submit">
                    Szukaj
                </Button>
            </Form>
        </div>
    )
};
export default content;