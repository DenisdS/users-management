import React from 'react'
import { shallow } from '../../enzyme'

import imgLogo from '../../assets/logo.png'
import Logo from './logo'

let wrapper

beforeEach(() => {
  wrapper = shallow( <Logo /> );
});

describe('<Logo /> rendering', () => {

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Logo renders an image", () => {
    const logo = shallow(<Logo />);

    expect(logo.find("img").prop("src")).toEqual(imgLogo);
  });

})




