import React, { Component } from 'react';
import axios from 'axios';
import Product from './Product';
import ProductForm from './ProductForm';

class ProductList extends Component {
  state = { products: [] }

  componentDidMount() {
    axios.get('/api/products')
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

  addProduct = ([product]) => {
    axios.post(`/api/products/${product.id}`, { product })
      .then( res => {
        const { products } = this.state
        this.setState({ products: [...products, res.data] })
      })
      .catch( err => {
        console.log(err)
      })
  }

  editProduct = (product) => {
      axios.put(`/api/products/${product.id}`, {product})
      .then( res => {
          const products = this.state.products.map( p => {
              if (p.id === product) 
                return res.data
              return p
          })

      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {
    return (
      <>
        <h1>Product List</h1>
      
        { this.displayProduct() }
      </>
    )
  }
} 

export default ProductList;