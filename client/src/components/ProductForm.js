import React, { Component } from 'react';

class ProductForm extends Component {
  state = { name: '', description: '', price: '', stock: ''}

  componentDidMount() {
    if (this.props.id) {
      const { name, description, price, stock, id } = this.props
      this.setState({ name, description, price, stock, id })
    } 
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      this.props.edit(this.state)
      this.props.toggleEdit()
    } else {
      this.props.add(this.state) //axios call here
    }
    this.setState({ name: '', description: '', price: '', stock: '' })
  }

  render() {
    const { name, description, price, stock, id } = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          placeholder='Name'
          name='name'
          value={name}
          onChange={this.handleChange}
        />
        <input 
          placeholder='Description'
          name='description'
          value={description}
          onChange={this.handleChange}
        />
        <input 
          placeholder='Price'
          name='price'
          value={price}
          onChange={this.handleChange}
        />
        <input 
          placeholder='Stock'
          name='stock'
          value={stock}
          onChange={this.handleChange}
        />
        <input
          type='submit'
          value='Submit'
        />
      </form>
    )
  }

}

export default ProductForm;