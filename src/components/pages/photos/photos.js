import React, { useContext, useState, useEffect } from 'react'

import { ListUserContext } from '../../organisms/usersList/usersList'

const Photos = () => {

  const [idUser] = useContext(ListUserContext);
  const [photosUser, setPhotos] = useState([]);

  const [idPhoto, setIdPhoto] = useState(40);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${idUser}`);
      const data = await response.json();
      setPhotos(data);
    };
    fetchData();
  }, [idUser]);

  const mainPhoto = photosUser.filter((photos) => {
    return photos.id === idPhoto
  })

  console.log(filterPhotos);

  return(
    <section>
      <ul>
      { mainPhoto.map(photo => (
        <li key={photo.id}>
          <h3>{photo.title}</h3>
          <img src={photo.url} alt={photo.title} />
        </li>
      ))}

      { photosUser.map(photo => (
        <li key={photo.id}>
          <img src={photo.thumbnailUrl} alt={photo.title} />
        </li>
      ))}
    </ul>
    </section>
  )
}
export default Photos;
