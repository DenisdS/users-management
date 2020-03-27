import React, { useContext, useState, useEffect } from 'react'

import { ListUserContext } from '../organisms/usersList/usersList'

const Posts = () => {

  const [idUser, setIdUser] = useContext(ListUserContext);
  const [postsUser, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${idUser}`);
      const data = await response.json();
      setPosts(data);
    };
    fetchData();
  }, [idUser]);

  return(
    <>
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

export default Posts;




