import React from "react";
import style from "../ImageGallery/ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { UnsplashImage } from "../FetchImages/FetchImages";

interface ImageGalleryProps {
  images: UnsplashImage[];
  onImageClick: (image: UnsplashImage) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <ul className={style.gallery}>
      {images.map((image) => (
        <li key={image.id} className={style.galleryItem}>
          <ImageCard image={image} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
