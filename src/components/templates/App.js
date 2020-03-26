import React from 'react';

import Routes from '../../routes/routes'
import style from './app.style'

import Header from '../organisms/header/header'
import Menu from '../molecules/menu/menu'

const App = () => {
  const classes = style()

  return(
    <>
      <Header />
      <Menu />
      <main className={classes.main} >
        <Routes />
      </main>
    </>
  )
}

export default App;
