import React, { Component } from 'react';
import axios from 'axios';
import Department from './Department';
import DepartmentForm from './DepartmentForm';

class DepartmentList extends Component {

  state = { departments: []}

  componentDidMount() {
    // grab post from db
    axios.get('/api/departments')
      .then( res => {
        this.setState({ departments: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  displayDepartment = () => {
    // editPost={this.editPost} add back in later once defined
    return this.state.departments.map( department => <Department key={department.id} {...department} />)
  }

  addDepartment = (department) => {
    axios.post('/api/departments', { department })
      .then( res => {
        const { departments } = this.state
        this.setState({ departments: [...departments, res.data] })
      })
      .catch( err => {
        console.log(err)
      })
  }

  editDepartment = (department) => {
    axios.put(`/api/departments/${department.id}`, { department })
      .then( res => {
        const departments = this.state.departments.map( p => {
          if (p.id === department.id)
            return res.data
          return p
        })
        this.setState({ departments })
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {

    return(
      <>
      <h1>List of Departments</h1>
      <ul>
        {
          this.displayDepartment()
        }
      </ul>
        <DepartmentForm  add={this.addDepartment} editDepartment={this.editDepartment} />
      </>
    )
  }
}

export default DepartmentList
