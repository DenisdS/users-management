import React, { useContext, useState, useEffect } from 'react'

import { ListUserContext } from '../../organisms/usersList/usersList'

import style from './posts.style'

const Posts = () => {

  const [idUser] = useContext(ListUserContext);
  const [postsUser, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${idUser}`)
      const data = await response.json();
      setPosts(data);
    };
    fetchData();
  }, [idUser]);

  const classes = style()

  return(
    <section>
      <ul className={classes.ul}>
      { postsUser.map(post => (
        <li key={post.id}>
          <article>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        </li>
      ))}
    </ul>
    </section>
  )
}

export default Posts;




