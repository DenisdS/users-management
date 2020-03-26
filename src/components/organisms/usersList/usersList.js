import React, { useState, useEffect } from 'react'

const UsersList = () => {

  const [listUsers, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
      console.log(data[0].name);
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
        </li>
      ))}
    </ul>
  )
}

export default UsersList;
