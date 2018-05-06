import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
    users: []
  };

  getAllUsers = async () => {
    try {
      const response = await axios.get("/api/users");
      this.setState({ users: response.data.users });
      console.log(this.state);
    } catch (err) {
      console.log(err);
      this.setState({ err: err.message });
    }
  };

  componentWillMount() {
    this.getAllUsers();
  }

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
                  New to us? <a href="#">Sign Up</a>
                </Message>
              </Grid.Column>
            </Grid>
          </LoginWrapper>
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
