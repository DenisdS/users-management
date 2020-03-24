import renderer from 'react-test-renderer';
import React from 'react';
import Header from './header'

it('Verify if header renders correctly', () => {
  const tree = renderer
    .create(
      <Header>
        <img src="" alt=""/>
      </Header>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
