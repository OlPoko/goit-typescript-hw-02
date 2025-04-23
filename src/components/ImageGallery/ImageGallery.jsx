import style from "../ImageGallery/ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={style.gallery}>
      {images.map((image) => (
        <li key={image.id} className={style.galleryItem}>
          <ImageCard image={image} onClick={onImageClick} />{" "}
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
