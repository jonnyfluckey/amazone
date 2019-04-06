import React, { Component } from 'react';
import {Container, Card} from 'semantic-ui-react';
import Product from './Product';

class Department extends Component {

  render() {
    const { name } = this.props

    return (
      <Container>
        <Card>{name}</Card>
      </Container>

    )
  }
}


export default Department