import React, { Component } from 'react';
import AppNavbar from '../components/AppNavbar';
import ShoppingList from '../components/ShoppingList';
import ItemModal from '../components/itemModal';
import { Container } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </div>
    );
  }
}

export default Home;
