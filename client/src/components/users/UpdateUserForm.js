import React, { Component } from "react";
import axios from "axios";
import { Button, Checkbox, Form } from "semantic-ui-react";
import styled from "styled-components";

class UpdateUserForm extends Component {
  state = {
    user: {
      name: "",
      photo_url: "",
      email: "",
      number: ""
    }
  };
  componentDidMount() {
    this.setState({ user: this.props.user });
  }

  handleChange = event => {
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  };

  updateUser = async event => {
    try {
      const userId = this.props.user.id;
      const payload = this.state.user;
      await axios.patch(`/api/users/${userId}`, payload);
      await this.props.toggleShowUpdate();
      await this.props.getSingleUser();
    } catch (err) {
      console.log(err);
      this.setState({ err: err.message });
    }
  };

  render() {
    return (
      <FormWrapper>
        <Form onSubmit={this.updateUser}>
          <Form.Field>
            <label>Name</label>
            <input
              placeholder="Name"
              id="Name"
              name="name"
              onChange={this.handleChange}
              value={this.state.user.name}
              type="text"
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Photo URL</label>
            <input
              placeholder="Photo URL"
              id="photo_url"
              name="photo_url"
              onChange={this.handleChange}
              value={this.state.user.photo_url}
              type="text"
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              placeholder="Email"
              id="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.user.email}
              type="text"
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Phone Number</label>
            <input
              placeholder="Phone Number"
              id="phone"
              name="phone"
              onChange={this.handleChange}
              value={this.state.user.phone}
              type="text"
              required
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </FormWrapper>
    );
  }
}

export default UpdateUserForm;

const FormWrapper = styled.div`
  width: 355px;
  margin: 0 auto;
  padding: 30px;
`;
