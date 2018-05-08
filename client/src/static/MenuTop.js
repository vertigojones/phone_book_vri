import React, { Component } from "react";
import { Button, Dropdown, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

class MenuTop extends Component {
  render() {
    return (
      <Menu size="massive">
        <Menu.Item
          as={ Link }
          to="/"
          name="home"
        />
        <Menu.Menu position="right">
          <Dropdown item text="Language">
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>American English</Dropdown.Item>
              <Dropdown.Item>Canadian English</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default MenuTop;
