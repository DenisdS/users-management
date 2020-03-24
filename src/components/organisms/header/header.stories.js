import React from 'react';

import { storiesOf } from "@storybook/react";

import Header from './header';
import AccessibleMenu from '../../molecules/accessibleMenu/menu'

storiesOf("Header", module)
  .add("Header simple", () => (
    <Header>
      <img src="" alt="" />
    </Header>
  ))
  .add("Header accessible", () => (
    <Header>
      <img src="" alt="" />
      <AccessibleMenu />
    </Header>
  ));
