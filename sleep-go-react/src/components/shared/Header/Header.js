import React, {Component} from 'react'
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap/';
import {Link} from 'react-router-dom';


class Header extends Component{
    state ={
        signedIn: true
    }
    render(){
        return(
            <Navbar bg="dark" variant="dark">
            <Link to='/'><Navbar.Brand href="#home">SleepGo</Navbar.Brand></Link>
            <Nav className="mr-auto">
                <Link to='/'><Nav.Link href="#home">Home</Nav.Link></Link>
                <Link to='/login'><Nav.Link href="#features">Login</Nav.Link></Link>
                <Link to='/register'><Nav.Link href="#pricing">Register</Nav.Link></Link>
            </Nav>
            <Form inline>
                {this.state.signedIn ? <Button variant='light' className="mr-sm-2">Sign in</Button> : <Button variant='outline-light' className="mr-sm-2">Sign out</Button>}
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-danger">Search</Button>
            </Form>
            </Navbar>
            )
        }
}

export default Header;