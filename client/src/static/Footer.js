import React, { Component } from "react";
import { Header, Segment } from "semantic-ui-react";

class Footer extends Component {
  render() {
    return (
      <Segment>
        <Header as="h3" textAlign="center">
          Copyright 2018 by Owen Liversidge
        </Header>
      </Segment>
    );
  }
}

export default Footer;
