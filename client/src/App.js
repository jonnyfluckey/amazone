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
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import DepartmentForm from './components/DepartmentForm';
import FetchUser from './shared/FetchUser'


const App = () => (
  <Fragment>
    <Navbar />
    <FetchUser>
    <Container>
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <ProtectedRoute exact path="/departments" component={DepartmentList} />
        // <Route exact path='/departmentform' component={DepartmentForm} />
        <Route exact path="/products" component={ProductList} />
        <Route exact path="/productform" component={ProductForm} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
    </FetchUser>
  </Fragment>
)

export default App;
