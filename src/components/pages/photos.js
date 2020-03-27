import React, { useContext, useState, useEffect } from 'react'

import { ListUserContext } from '../organisms/usersList/usersList'

const Photos = () => {

  const [idUser, setIdUser] = useContext(ListUserContext);
  const [photosUser, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${idUser}`);
      const data = await response.json();
      setPhotos(data);
    };
    fetchData();
  }, [idUser]);

  return(
    <>
      <ul>
      { photosUser.map(photo => (
        <li key={photo.id}>
          <h3>{photo.title}</h3>
          <img src={photo.url} alt={photo.title} />
        </li>
      ))}
    </ul>
    </>
  )
}
export default Photos;
