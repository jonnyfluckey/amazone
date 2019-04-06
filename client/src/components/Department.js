import React, { Component } from 'react';
<<<<<<< HEAD
import {Container, Card, Image, Grid } from 'semantic-ui-react';
import ProductList from './ProductList';
import axios from 'axios';

=======
import {Container, Card, Image, Grid} from 'semantic-ui-react';
import ProductList from './ProductList';
import axios from 'axios'
>>>>>>> 23a9f58317a3696d7743997e0ad24f4d4238d60c

class Department extends Component {
  state = { products: [] }

<<<<<<< HEAD
  // state = { products: [] }

  
  // componentDidMount() {
  //   const { id } = this.props.match.params
  //   // grab post from db
  //   axios.get(`/api/departments/${id}`)
  //     .then( res => {
  //       this.setState({ products: res.data })
  //     })
  //     .catch( err => {
  //       console.log(err)
  //     })
  // }

  // displayDepartment = () => {
  //   return this.state.products.map( product => <ProductList key={product.id} {...product} />)

  // }

=======
  componentDidMount() {
    axios.get(`/api/departments/${this.props.id}/products`)
      .then( res => {
        this.setState({ products: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }
>>>>>>> 23a9f58317a3696d7743997e0ad24f4d4238d60c
  render() {
    const { name } = this.props

    return (

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