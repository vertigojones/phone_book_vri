import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Users from "./components/users/Users";
import SingleUser from "./components/users/SingleUser";
import Contacts from "./components/contacts/Contacts";

import { injectGlobal } from "styled-components";

import MenuTop from "./static/MenuTop";
import Header from "./static/Header";
import Footer from "./static/Footer"

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
          <Route exact path="/" component={Users} />
          <Route exact path="/:id" component={SingleUser} />
          <Route path="/users/:id" component={Contacts} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
