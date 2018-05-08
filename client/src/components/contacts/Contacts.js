import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";
import styled from "styled-components";

class Contacts extends Component {
  state = {
    contacts: []
  };

  render() {
    return (
      <div>
        {this.props.contacts.map(contact => {
          return (
            <CardWrapper>
              <Card
                style={{ padding: "10px", margin: "35px" }}
                key={contact.id}
              >
                <Link to={`/contacts/${contact.id}`}>
                  <Image
                    size="small"
                    circular
                    centered
                    src="https://alexandriamn.city/wp-content/uploads/2017/11/Contact-placeholder-graphic.jpeg"
                    alt="Face Placeholder"
                  />
                  <Card.Content>
                    <Card.Header><h3>{contact.name}</h3></Card.Header>
                    <Card.Meta>
                      <h3>{contact.phone}</h3>
                    </Card.Meta>
                    <Card.Meta>{contact.email}</Card.Meta>
                    <Card.Meta>{contact.address}</Card.Meta>
                    <Card.Meta>
                      <h3>{contact.relationship}</h3>
                    </Card.Meta>
                  </Card.Content>
                </Link>
              </Card>
            </CardWrapper>
          );
        })}
      </div>
    );
  }
}

export default Contacts;

const CardWrapper = styled.div`
  display: flex;
  flex-flow: row-reverse wrap-reverse;
  justify-content: space-around;
  align-items: flex-start;
  align-content: flex-start;
`;
