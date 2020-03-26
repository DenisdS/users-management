import React from 'react';

import Routes from '../../routes/routes'
import style from './app.style'

import Header from '../organisms/header/header'
import UsersList from '../organisms/usersList/usersList'
import Menu from '../molecules/menu/menu'

const App = () => {
  const classes = style()

  return(
    <>
      <Header />
      <UsersList />
      <Menu />
      <main className={classes.main} >
        <Routes />
      </main>
    </>
  )
}

export default App;
