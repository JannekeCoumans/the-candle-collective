import React, { Component } from 'react';
import './assets/sass/main.scss';
import CartContextProvider from './contexts/CartContext';
import AppRouter from './routers/AppRouter';

class App extends Component {
  constructor() {
    super();
    this.state = {
        cartDrawerActive: false,
    };

    this.toggleCartDrawer = this.toggleCartDrawer.bind(this);
  }

  async toggleCartDrawer() {
      const { cartDrawerActive } = this.state;
      this.setState({cartDrawerActive: !cartDrawerActive});
  }


  render() {
    const { cartDrawerActive } = this.state;
    return (
      <CartContextProvider>
        <AppRouter cartDrawerActive={cartDrawerActive} toggleCartDrawer={this.toggleCartDrawer} />
      </CartContextProvider>
    );
}
}

export default App;
