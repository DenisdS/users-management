import React from 'react'

import Logo from '../../atoms/logo'
import style from './header.style'

const Header = () => {
  const classes = style()

  return(
    <header className={classes.header}>
      <Logo />
    </header>
  )
}

export default Header;
