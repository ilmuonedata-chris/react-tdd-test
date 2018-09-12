import React from 'react';
import { shallow } from 'enzyme';
import ProductList from './ProductList';
import '../../setupTest';

it('should render a list of products as an unordered list', () => {
  // PRECONDITIONS: prepare mock products
  const mockProducts = [
    {id: 1, name: 'Mock Product 1', brand: 'Mock Brand 1'},
    {id: 2, name: 'Mock Product 2', brand: 'Mock Brand 2'},
    {id: 3, name: 'Mock Product 3', brand: 'Mock Brand 3'},
  ];

  // ACT on object under test: render component
  const wrapper = shallow(<ProductList products={mockProducts}/>);

  // ASSERT the expected result: total li equals to total mockProducts
  expect(wrapper.find('li').length).toEqual(mockProducts.length); // 3
})