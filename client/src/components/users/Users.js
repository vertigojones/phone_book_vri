import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

import NewUserForm from "./NewUserForm"

import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

class Users extends Component {
  state = {
    users: [],
    showNewForm: false
  };

  getAllUsers = async () => {
    try {
      const response = await axios.get("/api/users");
      this.setState({ users: response.data.users });
    } catch (err) {
      console.log(err);
      this.setState({ err: err.message });
    }
  };

  componentWillMount() {
    this.getAllUsers();
  }

  showNewUserForm = () => {
    this.setState({ showNewForm: !this.state.showNewForm });
  };

  render() {
    return (
      <PageWrapper>
        {this.state.users.map(user => (
          <Link
            key={user._id}
            to={`/${user._id}`}
            style={{ textDecoration: "none" }}
          >
            <UserWrapper>
              <h2>{user.name}</h2>
            </UserWrapper>
          </Link>
        ))}

        <div className="login-form">
          <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
          <LoginWrapper>
            <Grid
              textAlign="center"
              style={{ height: "100%" }}
              verticalAlign="middle"
            >
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" color="teal" textAlign="center">
                  Log-in to your account
                </Header>
                <Form size="large">
                  <Segment stacked>
                    <Form.Input
                      fluid
                      icon="user"
                      iconPosition="left"
                      placeholder="E-mail address"
                    />
                    <Form.Input
                      fluid
                      icon="lock"
                      iconPosition="left"
                      placeholder="Password"
                      type="password"
                    />

                    <Button color="teal" fluid size="large">
                      Login
                    </Button>
                  </Segment>
                </Form>
                <Message>
                  New to us? <Button size='mini' onClick={this.showNewUserForm}>Sign Up</Button> 
                </Message>
              </Grid.Column>
            </Grid>
          </LoginWrapper>
          {this.state.showNewForm ? (
            <NewUserForm getAllUsers={this.getAllUsers} showNewUserForm={this.showNewUserForm} />
          ) : null}
        </div>
      </PageWrapper>
    );
  }
}

export default Users;

const PageWrapper = styled.div``;

const UserWrapper = styled.div`
  text-align: center;
  padding: 10px;
`;

const LoginWrapper = styled.div`
  margin: 50px 0px;
`
