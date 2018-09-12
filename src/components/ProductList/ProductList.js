import React, { Component } from 'react';
import propTypes from 'prop-types';

class ProductList extends Component {
  render() {
    const { products, onProductSelect } = this.props;
    return (
      <div>
        {products.map(product => (
          <li key={product.id} onClick={() => onProductSelect(product)}>
            {product.name} {product.brand}
          </li>
        ))}
      </div>
    )
  }
}

ProductList.propTypes = {
  products: propTypes.array.isRequired,
  onProductSelect: propTypes.func.isRequired
};

export default ProductList;