import React, { useState, useEffect } from 'react'

const UsersList = () => {

  const [listUsers, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  console.log(listUsers);

  return(
    <ul>
      { listUsers.map(user => (
        <li key={user.id}>
           <h3>{user.name}</h3>
           <p>{user.email}</p>
           <h4>{user.company.name}</h4>
        </li>
      ))}
    </ul>
  )
}

export default UsersList;
