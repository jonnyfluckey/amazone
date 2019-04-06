import React, { Component } from 'react';
import {Container, Card, Image, Grid } from 'semantic-ui-react';
import Product from './Product';

class Department extends Component {

  render() {
    const { name } = this.props

    return (
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

    )
  }
}


export default Department