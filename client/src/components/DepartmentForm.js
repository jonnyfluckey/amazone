import React, { Component } from 'react';

class DepartmentForm extends Component {
  state = { name: '' }

  componentDidMount() {
    if (this.props.id) {
      const { name, id } = this.props
      this.setState({ name, id })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      this.props.editDepartment(this.state)
      this.props.toggleEdit()
    } else {
      this.props.add(this.state)
    }
    this.setState({ name: '' })
  }

  render () {
    const { name } = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder='Name'
          name='name'
          value={name}
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

export default DepartmentForm;
