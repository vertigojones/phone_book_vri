import React, { Component } from "react";
import styled from "styled-components";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <h1>Contactr</h1>
      </HeaderWrapper>
    );
  }
}

export default Header;

const HeaderWrapper = styled.div`
  text-align: center;

  h1 {
    font-family: 'Homemade Apple', cursive;
    font-size: 64px;
    padding: 20px;
    color: grey;
  }
`;
