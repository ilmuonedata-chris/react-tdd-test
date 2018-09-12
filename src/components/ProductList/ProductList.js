import React, { Component } from 'react';
import propTypes from 'prop-types';

class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map(product => (
          <li key={product.id}>
            {product.name}
          </li>
        ))}
      </div>
    )
  }
}

ProductList.propTypes = {
  products: propTypes.array.isRequired
};

export default ProductList;