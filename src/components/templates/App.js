import React from 'react';

import Routes from '../../routes/routes'
import style from './app.style'

import Header from '../organisms/header/header'
import Menu from '../molecules/menu/menu'
import { ListUserProvider } from '../organisms/usersList/usersList'
import InfoUser from '../molecules/infoUser/infoUser'

const App = () => {
  const classes = style()

  return(
    <div className={classes.container} >
      <Header className={classes.header} />
      <ListUserProvider className={classes.aside}>
        <Menu className={classes.nav} />
        <main className={classes.main} >
          <InfoUser />
          <Routes />
        </main>
      </ListUserProvider>
    </div>
  )
}

export default App;
