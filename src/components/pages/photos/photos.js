import React, { useContext, useState, useEffect } from 'react'

import { ListUserContext } from '../../organisms/usersList/usersList'

import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";

import style from './photos.style'

const Photos = () => {
  const [idUser] = useContext(ListUserContext);
  const [photosUser, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${idUser}`)
      const data = await response.json();
      setPhotos(data);
    };
    fetchData();
  }, [idUser]);

  const imgSlide = [];

  const getImgs = (img) => {
    imgSlide.push({'original':`${img["url"]}`, 'thumbnail':`${img["thumbnailUrl"]}`});
    return imgSlide;
  }

  photosUser.forEach(getImgs);

  const classes = style ();

  return(
    <section className={classes.sectionPhotos}>
      <ImageGallery items={imgSlide} />
    </section>
  )
}
export default Photos;
