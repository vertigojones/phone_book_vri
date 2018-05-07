import React, { Component } from "react";
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
      const userId = this.props.match.params.userId;
      const response = await axios.get(`/api/users/${userId}`);
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
    return <div>
        Hello from single user
    {this.state.user.name}
    </div>;
  }
}

export default SingleUser;
