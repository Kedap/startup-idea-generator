import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <Container text>
        <Header as="h1" content="Startup Idea Generator" textAlign="center" />
      </Container>
    );
  }
}

export default App;
