import React from "react";
import style from "./ImageCard.module.css";
import { UnsplashImage } from "../FetchImages/FetchImages";

interface ImageCardProps {
  image: UnsplashImage;
  onClick: (image: UnsplashImage) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={style.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description || "Image description"}
        onClick={() => onClick(image)}
        className={style.image}
      />
    </div>
  );
};

export default ImageCard;
