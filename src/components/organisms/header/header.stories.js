import React from 'react';

import { storiesOf } from "@storybook/react";

import Header from './header';
import AccessibleMenu from '../../molecules/accessibleMenu/menu'

storiesOf("Header", module)
  .add("simple", () => (
    <Header>
      <img src="" alt="" />
    </Header>
  ))
  .add("accessible", () => (
    <Header>
      <AccessibleMenu />
    </Header>
  ));
