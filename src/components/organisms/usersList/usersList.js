import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import style from './userList.style'


const ListContext = React.createContext([{}, () => {}]);

const ListProvider = (props) => {

  const [listUsers, setUsers] = useState([]);
  const [idUser, setIdUser] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  const classes = style()

  return(
    <>
    <aside className={classes.aside} >
      <ul>
        { listUsers.map(user => (
          <li key={user.id}>
            <Link to="" onClick={() => setIdUser(user.id)}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <h4>{user.company.name}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </aside>



    <ListContext.Provider value={[idUser, setIdUser]}>
      {props.children}
    </ListContext.Provider>
    </>
  )
}

export { ListContext, ListProvider };
