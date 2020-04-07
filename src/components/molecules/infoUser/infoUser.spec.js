import React from 'react'
import { shallow } from '../../../enzyme'

import InfoUser from './infoUser'

describe('<InfoUser /> rendering', () => {

  it('renders correctly', () => {
    const wrapper = shallow( <InfoUser /> )
    expect(wrapper).toMatchSnapshot();
  });

})




