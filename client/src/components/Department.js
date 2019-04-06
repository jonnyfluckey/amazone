import React, { Component } from 'react';
import {Container, Card, Image, Grid} from 'semantic-ui-react';
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



        <>
        <Grid>
        <Grid.Column>
        <Card>
          <Image src='https://seoexpertbrad.com/wp-content/uploads/2018/01/Fake-Amazon-Reviews.jpg' />
        <Card.Content>{name}</Card.Content>
        </Card>
        </Grid.Column>
        </Grid>
        </>


    )
  }
}


export default Department
