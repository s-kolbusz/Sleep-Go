import React from 'react';
import {Form, Button, Col} from 'react-bootstrap';
import classes from './Register.module.css';




const register = (props) => {
    // react-boostrap form
    return(
    <React.Fragment>
        <div className={classes.Register}>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Adres e-mail</Form.Label>
                    <Form.Control type="email" placeholder="Wprowadź adres e-mail" onChange={props.onChangeMail} value={props.userName}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Hasło</Form.Label>
                    <Form.Control type="password" placeholder="Wprowadź hasło" onChange={props.onChangePassword} value={props.userPassword}/>
                    </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit" onClick={props.handleRegister}>
                    Rejestracja
                </Button>
            </Form>
        </div>
    </React.Fragment>
    );
};
export default register;