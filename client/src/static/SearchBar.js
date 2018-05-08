import React, { Component } from "react";
import { Search } from "semantic-ui-react";
import styled from "styled-components";
import axios from "axios";

class SearchBar extends Component {
  handleSearch(event) {
    this.props.searchContacts(event.target.value);
  }
  render() {
    return (
      <form>
        <div className="row">
          <Search>
            <input
              type="text"
              placeholder="Search for ..."
              onKeyUp={this.handleSearch.bind(this)}
            />
          </Search>
        </div>
      </form>
    );
  }
}

export default SearchBar;
