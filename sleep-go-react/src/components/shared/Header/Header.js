import React, {PureComponent} from 'react'
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap/';
import {Link} from 'react-router-dom';


class Header extends PureComponent{
    
    render(){
    return(
        <Navbar bg="dark" variant="dark">
        <Link to='/'><Navbar.Brand>SleepGo</Navbar.Brand></Link>
        <Nav className="mr-auto">
            <Link to='/' className='nav-link'>Start</Link>
            <Link to='/objects' className='nav-link'>Obiekty</Link>
            <Link to='/add' className='nav-link'>Dodaj obiekt</Link>
            <Link to='/login' className='nav-link'>Logowanie</Link>
            <Link to='/register' className='nav-link'>Rejestracja</Link>
        </Nav>
        <Form inline>
            {this.props.signedIn ? 
            <Link to='/'>
                <Button onClick={this.props.onSignOut} variant='outline-light' className="mr-sm-2">Wyloguj się</Button>
            </Link> : 
            <Link to='/login'>
                <Button onClick={this.props.onSignIn} variant='light' className="mr-sm-2">Zaloguj się</Button>
            </Link>}
            <FormControl type="text" placeholder="Szukaj" className="mr-sm-2" />
            <Button variant="outline-danger">Szukaj</Button>
        </Form>
        </Navbar>
        )
    }
}

export default Header;