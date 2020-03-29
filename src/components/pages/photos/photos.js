import React, { useContext, useState, useEffect } from 'react'

import SlideShow from 'react-image-show';

import { ListUserContext } from '../../organisms/usersList/usersList'

import style from './photos.style'

const Photos = () => {

  const [idUser] = useContext(ListUserContext);
  const [photosUser, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${idUser}`);
      const data = await response.json();
      setPhotos(data);
    };
    fetchData();
  }, [idUser]);

  const imgSlide = [];

  const getImgs = (img) => {
    var auxImg = img["url"];
    imgSlide.push(`${auxImg}`);
    return imgSlide;
  }

  photosUser.forEach(getImgs);

  const classes = style()

  console.log(imgSlide);

  return(
    <section>
        <SlideShow
          images={imgSlide}
          width="920px"
          imagesWidth="800px"
          imagesHeight="450px"
          imagesHeightMobile="56vw"
          thumbnailsWidth="920px"
          thumbnailsHeight="12vw"
          arrows thumbnails fixedImagesHeight
        />
    </section>
  )
}
export default Photos;
