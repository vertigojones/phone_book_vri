import React, { Component } from "react";
import { Image, Button } from "semantic-ui-react";
import styled from "styled-components";
import axios from "axios";

import UpdateUserForm from "./UpdateUserForm";

class SingleUser extends Component {
  state = {
    user: {},
    contacts: [],
    updateUser: false
  };

  componentDidMount() {
    this.getSingleUser();
  }

  getSingleUser = async () => {
    try {
      const userId = this.props.match.params.id;
      const res = await axios.get(`/api/users/${userId}`);
      this.setState({
        user: res.data.user,
        contacts: res.data.contacts
      });
    } catch (err) {
      console.log(err);
      this.setState({ err: err.message });
    }
  };

  toggleShowUpdate = () => {
    this.setState({ updateUser: !this.state.updateUser });
  };

  render() {
    return (
      <ProfileWrapper>
        <Image
          src={this.state.user.photo_url}
          size="medium"
          circular
          centered
          alt="Drummer Profile"
        />
        <h1>{this.state.user.name}</h1>
        <h3>{this.state.user.email}</h3>
        <h1>{this.state.user.phone}</h1>
        <Button onClick={this.toggleShowUpdate}>
          Update {this.state.user.name}
        </Button>
        {this.state.updateUser ? (
          <UpdateUserForm
            user={this.state.user}
            toggleShowUpdate={this.toggleShowUpdate}
            getSingleUser={this.getSingleUser}
          />
        ) : null}
      </ProfileWrapper>
    );
  }
}

export default SingleUser;

const ProfileWrapper = styled.div`
  text-align: center;
`;
