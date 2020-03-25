import React from 'react'

import { Link } from 'react-router-dom'

const links = [
  { route: "/fotos", label: "Fotos"},
  { route: "/posts", label: "Posts"}
];

const Menu = () => {
  return(
    <nav>
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
