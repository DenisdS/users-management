import React from 'react'

import { Link } from 'react-router-dom'

import style from './menu.style'

const links = [
  { route: "/fotos", label: "FOTOS"},
  { route: "/posts", label: "POSTS"}
];

const Menu = () => {
  const classes = style()

  return(
    <nav className={classes.nav}>
      <ul>
        { links.map(link => (
          <li key={link.route}>

            <Link to={link.route}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu;
