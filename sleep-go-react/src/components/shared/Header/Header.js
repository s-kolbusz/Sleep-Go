import React from 'react'
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap/';
import {Link} from 'react-router-dom';


const header = (props) =>{
    let signedIn = props.signedIn;
    return(
        <Navbar bg="dark" variant="dark">
        <Link to='/'><Navbar.Brand href="#home">SleepGo</Navbar.Brand></Link>
        <Nav className="mr-auto">
            <Link to='/'><Nav.Link href="#home">Home</Nav.Link></Link>
            <Link to='/login'><Nav.Link href="#features">Login</Nav.Link></Link>
            <Link to='/register'><Nav.Link href="#pricing">Register</Nav.Link></Link>
        </Nav>
        <Form inline>
            {props.signedIn ? <Button onClick={props.onClick} variant='outline-light' className="mr-sm-2">Sign out</Button> : <Link to='/login'><Button onClick={props.onClick} variant='light' className="mr-sm-2">Sign in</Button></Link>}
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-danger">Search</Button>
        </Form>
        </Navbar>
        )
}

export default header;