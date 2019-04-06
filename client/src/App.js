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
import FetchUser from './shared/FetchUser'



const App = () => (
  <Fragment>
    <Navbar />
    <FetchUser>
    <Container>
      <Switch>
        <ProtectedRoute exact path="/" component={DepartmentList} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <ProtectedRoute exact path="/departments" component={DepartmentList} />
        // <Route exact path='/departmentform' component={DepartmentForm} />
        {/* <Route path="/department/:Id" component={ProductList} /> */}
        <Route component={NoMatch} />
      </Switch>
    </Container>
    </FetchUser>
  </Fragment>
)

export default App;
