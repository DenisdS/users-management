import React from 'react'
import renderer from 'react-test-renderer'
import { Link } from 'react-router-dom'

import Menu from './menu'

it('Verify if menu renders correctly', () => {
  const tree = renderer
    .create(
      <Menu>
        <ul>
          <li><Link>Fotos</Link></li>
          <li><Link>Posts</Link></li>
        </ul>
      </Menu>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
