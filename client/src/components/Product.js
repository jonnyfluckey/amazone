import React, { Component } from 'react';
import {Container, Card} from 'semantic-ui-react';


class Product extends Component {

  render() {
    const { name, description, price, stock } = this.props

    return (
      <Container>
        <Card>{name}, {description}, {price}, {stock}</Card>
      </Container>

    )
  }
}


export default Product