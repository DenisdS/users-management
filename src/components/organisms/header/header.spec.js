import React from 'react';
import { shallow } from '../../../enzyme'

import Header from './header'
import Logo from '../../atoms/logo'

let wrapper

beforeEach(() => {
  wrapper = shallow( <Header /> );
});

describe('<Header /> rendering', () => {

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Header renders a child component", () => {
    const logo = shallow(<Header />);

    expect(wrapper.containsMatchingElement(<Logo />)).toEqual(true)
  });

})
