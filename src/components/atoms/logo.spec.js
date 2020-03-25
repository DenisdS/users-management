import React from 'react'
import { shallow } from '../../enzyme'

import imgLogo from '../../assets/logo.png'
import Logo from './logo'

describe('<Logo /> rendering', () => {

  it('renders correctly', () => {
    const wrapper = shallow( <Logo /> )
    expect(wrapper).toMatchSnapshot();
  });

  it("Logo renders an image and your alt attribute", () => {
    const wrapper = shallow( <Logo /> )
    expect(wrapper.find("img").prop("src")).toEqual(imgLogo);
    expect(wrapper.find("img").prop("alt")).toEqual("Diary Social");
  });

})




