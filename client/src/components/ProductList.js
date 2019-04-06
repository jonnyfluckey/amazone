import React, { Component } from 'react';
import axios from 'axios';
import Product from './Product';
import ProductForm from './ProductForm';
import DepartmentList from './DepartmentList';

class ProductList extends Component {
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

  addProduct = (department, product) => {
    axios.post(`/api/department/${department.id}/product`, { product })
      .then( res => {
        const { products } = this.state
        this.setState({ products: [...products, res.data] })
      })
      .catch( err => {
        console.log(err)
      })
  }

  editProduct = (department, product) => {
      axios.put(`/api//department/${department.id}/products/${product.id}`, {product})
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
        
      { this.displayProduct() }
      </>
    )
  }
}

export default ProductList;
