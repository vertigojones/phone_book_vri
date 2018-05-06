import React, { Component } from "react";
import axios from "axios";
import { Button, Checkbox, Form } from "semantic-ui-react";
import styled from "styled-components";

class NewUserForm extends Component {
  state = {
    name: "",
    photo_url: "",
    email: "",
    phone: ""
  };

  handleChange = event => {
    const name = event.target.name;
    const newState = { ...this.state };
    newState[name] = event.target.value;
    this.setState(newState);
  };

  handleSubmit = async event => {
    try {
      event.preventDefault();
      const newUser = {
        name: this.state.name,
        photo_url: this.state.photo_url,
        email: this.state.email,
        phone: this.state.phone
      };
      await axios.post("/api/users", newUser);
      await this.props.getAllUsers();
      await this.props.showNewUserForm();
    } catch (err) {
      console.log(err);
      this.setState({ err: err.message });
    }
  };

  render() {
    return (
      <FormWrapper>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Name</label>
            <input 
            placeholder="Name"
            id="Name"
            name="name" 
            onChange={this.handleChange}
            value={this.state.name}
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
            value={this.state.photo_url}
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
            value={this.state.email}
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
            value={this.state.phone}
            type="text"
            required
            />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </FormWrapper>
    );
  }
}

export default NewUserForm;

const FormWrapper = styled.div`
  width: 36vw;
  margin: 0 auto;
  padding-bottom: 30px;
`;
