import React, { Component } from 'react';
import './App.css';
import ProductList from './components/ProductList/ProductList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProducts: [],
      products: [
        {id: 1, name: 'AirMax 90', brand: 'Nike'},
        {id: 2, name: 'Yeezy', brand: 'Adidas'},
        {id: 3, name: 'Classic', brand: 'Reebok'},
      ]
    }
  }

  handleProductSelect = product => {
    this.setState(prevState => {
      return {
        selectedProducts: prevState.selectedProducts.concat(product)
      }
    });
  }

  render() {
    return (
      <div>
        <h1>My Product List</h1>
        <p>You have selected {this.state.selectedProducts.length} product(s).</p>
        <ProductList 
          products={this.state.products}
          onProductSelect={this.handleProductSelect}
        />
      </div>
    );
  }
}

export default App;
