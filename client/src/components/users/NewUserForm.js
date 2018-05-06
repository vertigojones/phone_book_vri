import React, { Component } from "react";
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

  render() {
    return (
      <FormWrapper>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder="Last Name" />
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
`;
