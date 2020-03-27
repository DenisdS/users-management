import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import style from './userList.style'

const UsersList = () => {

  const [listUsers, setUsers] = useState([]);
  const [idUser, setIdUser] = useState(1);
  const [postsUser, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${idUser}`);
      const data = await response.json();
      setPosts(data);
    };
    fetchData();
  }, [idUser]);

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

    <ul>
      { postsUser.map(post => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
    </>
  )
}

export default UsersList;
