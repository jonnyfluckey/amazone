import React, { Component } from 'react';
import axios from 'axios';
import Product from './Department';
import ProductForm from './DepartmentForm';

class ProductList extends Component {

  state = { products: [] }


  // componentDidMount() {
  //   // grab post from db
  //   axios.get(`/api/departments/${department_id}/products`)
  //     .then( res => {
  //       this.setState({ products: res.data })
  //     })
  //     .catch( err => {
  //       console.log(err)
  //     })
  // }

  // displayProduct = () => {
  //   return this.state.products.map( p => <Product key={p.id} {...p} />)
  // }

  // addProduct = (product) => {
  //   axios.post(`/api/departments/${department_id}/products`,  product )
  //     .then( res => {
  //       const { products } = this.state
  //       this.setState({ products: [...products, res.data] })
  //     })
  //     .catch( err => {
  //       console.log(err)
  //     })
  // }

  // editProduct = (product) => {
  //   axios.put(`/api/departments/${department{id}}/products/${product.id}`, { product })
  //     .then( res => {
  //       const products = this.state.products.map( p => {
  //         if (p.id === product.id)
  //           return res.data
  //         return p
  //       })
  //       this.setState({ products })
  //     })
  //     .catch( err => {
  //       console.log(err)
  //     })
  // }

  render() {


    return(
      <div>
      <h1>List of Products</h1>
        { this.displayProduct() }
        <ProductForm addProduct={this.addProduct} editProduct={this.editProduct} />
    </div>

    )
  }
}

export default ProductList
