import React from 'react'
import { shallow } from '../../../enzyme'

import Menu from './menu'

jest.mock('react-router-dom/Link', () => ({ Link: 'Link' }))

it('renders correctly', () => {
  const component = shallow( <Menu /> )
  expect(component).toMatchSnapshot();
})

