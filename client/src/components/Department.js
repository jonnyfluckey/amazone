import React, { Component } from 'react';
import {Container, Card} from 'semantic-ui-react';
import ProductList from './ProductList';
import axios from 'axios'

class Department extends Component {
  state = { products: [] }

  componentDidMount() {
    axios.get(`/api/departments/${this.props.id}/products`)
      .then( res => {
        this.setState({ products: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }
  render() {
    const { name } = this.props

    return (
      <Container>
        <Card>{name}</Card>
        <ProductList />
      </Container>

    )
  }
}


export default Department