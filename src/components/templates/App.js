import React from 'react';

import Routes from '../../routes/routes'
import style from './app.style'

import Header from '../organisms/header/header'
import Menu from '../molecules/menu/menu'

import { ListUserProvider } from "../organisms/usersList/usersList";
import Posts from '../pages/posts'
import Photos from '../pages/photos'

const App = () => {
  const classes = style()

  return(
    <>
      <Header />
      <Menu />
      <main className={classes.main} >
        <ListUserProvider>
          <Routes />
        </ListUserProvider>
      </main>
    </>
  )
}

export default App;
