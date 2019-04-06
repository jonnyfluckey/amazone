import React, { Fragment, } from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './shared/Navbar';
import Login from './shared/Login';
import Register from './shared/Register';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import ProtectedRoute from './shared/ProtectedRoute';
import DepartmentList from './components/DepartmentList';
import DepartmentForm from './components/DepartmentForm';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import DepartmentForm from './components/DepartmentForm';


const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/departments" component={DepartmentList} />
        <Route exact path='/departmentform' component={DepartmentForm} />
        <Route exact path="/products" component={ProductList} />
        <Route exact path="/productform" component={ProductForm} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
)

export default App;
