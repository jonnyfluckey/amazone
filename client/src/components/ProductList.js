import React, { Component } from 'react';
import axios from 'axios';
import Product from './Product';
import ProductForm from './ProductForm';
import DepartmentList from './DepartmentList';
import { Grid, Card, Image } from 'semantic-ui-react';

class ProductList extends Component {
<<<<<<< HEAD
  // state = { products: [] }

  // componentDidMount() {
  //   const {id} = this.props.match.params
  //   axios.get(`/api/departments/${id}/product`)
  //     .then( res => {
  //       this.setState({ products: res.data })
  //     })
  //     .catch( err => {
  //       console.log(err)
  //     })
  // }
=======
  state = { products: [] }


  componentDidMount = (department) => {
    axios.get(`/api/departments/${department.id}/product`)
      .then( res => {
        this.setState({ products: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }


  displayProduct = () => {
    return this.state.products.map( product => <Product key={product.id} {...product} />)
  }
>>>>>>> 23a9f58317a3696d7743997e0ad24f4d4238d60c

  // displayProduct = () => {
  //   return this.state.products.map( product => <Product key={product.id} {...product} />)
  // }

  // addProduct = (department, product) => {
  //   axios.post(`/api/department/${department.id}/product`, { product })
  //     .then( res => {
  //       const { products } = this.state
  //       this.setState({ products: [...products, res.data] })
  //     })
  //     .catch( err => {
  //       console.log(err)
  //     })
  // }

  // editProduct = (department, product) => {
  //     axios.put(`/api//department/${department.id}/products/${product.id}`, {product})
  //     .then( res => {
  //         const products = this.state.products.map( p => {
  //             if (p.id === product) 
  //               return res.data
  //             return p
  //         })

  //     })
  //     .catch( err => {
  //       console.log(err)
  //     })
  // }

  render() {
    const { name } = this.props

    return (
<<<<<<< HEAD
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
=======
      <>
        
      { this.displayProduct() }
      </>
>>>>>>> 23a9f58317a3696d7743997e0ad24f4d4238d60c
    )
  }
} 

export default ProductList;