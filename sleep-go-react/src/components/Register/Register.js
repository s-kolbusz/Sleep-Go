import React from 'react';
import {Form, Button, Col} from 'react-bootstrap';
import classes from './Register.module.css';




const register = (props) => {
    return(
    <React.Fragment>
        <div className={classes.Register}>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={props.onChangeMail} value={props.userName}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={props.onChangePassword} value={props.userPassword}/>
                    </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit" onClick={props.handleRegister}>
                    Register
                </Button>
            </Form>
        </div>
    </React.Fragment>
    );
};
export default register;