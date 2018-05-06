import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import User from "./components/User";
import Contacts from "./components/Contacts";
import { injectGlobal } from "styled-components";

import MenuTop from "./static/MenuTop";
import Header from "./static/Header";

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Homemade+Apple');
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MenuTop />
          <Header />
          <Route exact path="/" component={User} />
          <Route path="/users/:id" component={Contacts} />
        </div>
      </Router>
    );
  }
}

export default App;
