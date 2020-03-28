import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { ListUserContext } from '../../organisms/usersList/usersList'

import style from './photos.style'

const Photos = () => {

  const [idUser] = useContext(ListUserContext);
  const [photosUser, setPhotos] = useState([]);

  const [idPhoto, setIdPhoto] = useState(1);

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

  const classes = style()

  return(
    <section>
      <ul>
      { mainPhoto.map(photo => (
        <li key={photo.id}>
          <h3>{photo.title}</h3>
          <img src={photo.url} alt={photo.title} />
        </li>
      ))}

      <li>
        <ul className={classes.listThumbnailUrl}>
          { photosUser.map(photo => (
            <li key={photo.id} >
              <Link to="" onClick={() => setIdPhoto(photo.id)}>
                <img src={photo.thumbnailUrl} alt={photo.title} />
              </Link>
            </li>
          ))}
        </ul>
      </li>
    </ul>
    </section>
  )
}
export default Photos;
