import React, {PureComponent} from 'react'
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap/';
import {Link} from 'react-router-dom';


class Header extends PureComponent{
    // rendering header with buttons that are rendered conditionally, if we are signed in we we render objects buttons and and button to sign out,if we are signed out we render the login, register and sign in button Nav belongs to react-bootstrap package
    render(){
    return(
        <Navbar bg="dark" variant="dark" expand="sm">
        <Link to='/'><Navbar.Brand>SleepGo</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Link to='/' className='nav-link'>Start</Link>
                    <Link to='/map' className='nav-link'>Mapa</Link>
                    <Link to='/objects' className='nav-link'>Obiekty</Link>
            {this.props.signedIn ?
                <React.Fragment>
                    <Link to='/add' className='nav-link'>Dodaj obiekt</Link>
                </React.Fragment>
                :
                <React.Fragment>
                    <Link to='/login' className='nav-link'>Logowanie</Link>
                    <Link to='/register' className='nav-link'>Rejestracja</Link>
                </React.Fragment>
                }
        </Nav>
        <Form inline className="justify-content-center mx-4">
            <FormControl type="text" placeholder="Szukaj" className='mr-1 my-1'/>
            <Button variant="outline-danger" className='mr-1 my-1'>Szukaj</Button>
        </Form>

        {this.props.signedIn ?
        <Link to='/'>
            <Button onClick={this.props.onSignOut} variant='outline-light' className='mr-1 my-1'>Wyloguj się</Button>
        </Link> :
        <Link to='/login'>
            <Button onClick={this.props.onSignIn} variant='light' className='mr-1 my-1'>Zaloguj się</Button>
        </Link>}

        </Navbar.Collapse>

        </Navbar>
        )
    }
}

export default Header;