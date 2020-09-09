import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Button, Form, Container, Row, Col, Jumbotron, Alert } from 'react-bootstrap';
import '../login/login.css';

class Login extends Component {
  state = {
    redirect: false,
    username: "", 
    userrole: "",
    isloggedin: null
  }

  validateForm = () =>  {
    return this.state.username.length > 0 && this.state.userrole.length > 0;
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let loginReq = {
      username: this.state.username,
      userrole: this.state.userrole
    };
    axios({
      method: "post",
      url: "https://localhost:5001/Api/UserInfo/auth",
      data: loginReq
    }).then(resp =>  {
      this.setState({ redirect: resp.data, isloggedin: resp.data});
    });
  }

  componentDidUpdate()
  {

  }

  render () {
    const { redirect, userrole, username, isloggedin } = this.state;
   
     if (redirect) {
        return <Redirect
          to={{
            pathname: "/user",
            state: { userrole: userrole, username: username, isloggedin: isloggedin }
          }}
          />;
        // if(userrole === 'NormalUser'){
        //   return <Redirect to='/adduser'/>;
        // }
        // else {
        //   return <Redirect
        //   to={{
        //     pathname: "/users",
        //     state: { userrole: userrole }
        //   }}
        //   />;
        // }
     }

     return (
      <div className="Login">
          <Container>
            <Row>
              <Col>
                <h2><Form.Label>Login</Form.Label></h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <Jumbotron>
                  <form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="username">
                      <Form.Control
                        autoFocus
                        type="text"
                        value={this.state.username}
                        onChange={e => this.setState({username:e.target.value})}
                        placeholder="Enter Username" />
                    </Form.Group>
                    <Form.Group controlId="userrole">
                      <Form.Control as="select" 
                      value={this.state.userrole}
                      onChange={e => this.setState({userrole: e.target.value})}>
                      <option>Select role</option>
                      <option>NormalUser</option>
                      <option>AdminUser</option>
                      <option>SuperUser</option>
                      </Form.Control>
                    </Form.Group>
                    <Button block disabled={!this.validateForm()} type="submit">
                      Login
                    </Button>
                  </form>
                </Jumbotron>
              </Col>
            </Row>
            <Row>
              <Col>
              {
                    this.state.isloggedin !== null && 
                    !this.state.isloggedin &&
                     <Alert variant="danger">
                         Invalid credentials
                      </Alert>
                  }
              </Col>
            </Row>
          </Container>  
      </div>
    );
  }
} 


export default Login;