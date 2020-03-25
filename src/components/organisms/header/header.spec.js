import React from 'react';
import { shallow } from '../../../enzyme'

import Header from './header'
import Logo from '../../atoms/logo'

describe('<Header /> rendering', () => {

  it('renders correctly', () => {
    const wrapper = shallow( <Header /> )
    expect(wrapper).toMatchSnapshot();
  });

  it("Header renders a child component", () => {
    const wrapper = shallow( <Header /> )
    expect(wrapper.containsMatchingElement(<Logo />)).toEqual(true)
  });

})
