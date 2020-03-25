import React from 'react';
import { shallow } from '../enzyme'

import Routes from '../routes/routes'

import App from './App'
import Header from '../components/organisms/header/header'
import Menu from '../components/molecules/menu/menu'

describe('<App /> rendering', () => {

  it('renders correctly', () => {
    const wrapper = shallow( <App /> )
    expect(wrapper).toMatchSnapshot();
  });

  it("App renders children components", () => {
    const wrapper = shallow( <App /> )
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true)
    expect(wrapper.containsMatchingElement(<Menu />)).toEqual(true)
    expect(wrapper.containsMatchingElement(<Routes />)).toEqual(true)
  });

})
