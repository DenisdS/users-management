import React from 'react';

import Routes from '../routes/routes'

import Header from '../components/organisms/header/header'
import Menu from '../components/molecules/menu/menu'

const App = () => {
  return(
    <>
      <Header />
      <Menu />
      <Routes />
    </>
  )
}

export default App;
