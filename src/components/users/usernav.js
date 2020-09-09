import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form } from 'react-bootstrap';

class UserNav extends Component {

render(){
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">User Admin Module</Navbar.Brand>
                <Nav className="mr-auto">
                
                </Nav>
                <Form inline>
                    <Navbar.Brand href="#home">Logged in as - [{this.props.username}]</Navbar.Brand>
                    <Link variant="outline-info" to="/">Logout</Link>
                    {/* <Button variant="outline-info" onClick={() => history.push('/')}>Logout</Button> */}
                </Form>
          </Navbar>
        )
    }
}

export default UserNav;