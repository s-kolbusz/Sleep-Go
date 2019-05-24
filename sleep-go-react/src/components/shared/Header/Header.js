import React from 'react'
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap/';
import {Link} from 'react-router-dom';


const header = (props) =>{
    return(
        <Navbar bg="dark" variant="dark">
        <Link to='/'><Navbar.Brand>SleepGo</Navbar.Brand></Link>
        <Nav className="mr-auto">
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/login' className='nav-link'>Login</Link>
            <Link to='/register' className='nav-link'>Register</Link>
        </Nav>
        <Form inline>
            {props.signedIn ? 
            <Link to='/'>
                <Button onClick={props.onSignOut} variant='outline-light' className="mr-sm-2">Sign out</Button>
            </Link> : 
            <Link to='/login'>
                <Button onClick={props.onSignIn} variant='light' className="mr-sm-2">Sign in</Button>
            </Link>}
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-danger">Search</Button>
        </Form>
        </Navbar>
        )
}

export default header;