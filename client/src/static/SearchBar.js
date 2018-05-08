import React, { Component } from "react";
import { Search } from "semantic-ui-react";
import styled from "styled-components"

class SearchBar extends Component {
  state = {
    query: " "
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    });
  };

  render() {
    return (
      <form>
        <Search
          placeholder="Search for..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </form>
    );
  }
}

export default SearchBar;
