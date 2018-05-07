import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import styled from "styled-components";
import axios from "axios";

class SingleUser extends Component {
  state = {
    user: {},
    contacts: []
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

  render() {
    return (
      <ProfileWrapper>
        <Image
          src={this.state.user.photo_url}
          size="medium"
          circular
          alt="Drummer Profile"
        />
        <h1>{this.state.user.name}</h1>
      </ProfileWrapper>
    );
  }
}

export default SingleUser;

const ProfileWrapper = styled.div`
  align-items: center;
`;
