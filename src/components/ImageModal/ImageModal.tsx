import ReactModal from "react-modal";
import style from "./ImageModal.module.css";
import { FC } from "react";


interface Image {
  urls: {
    regular: string;
  };
  alt_description: string;
}


interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image;
}

const ImageModal: FC<ImageModalProps> = ({ isOpen, onRequestClose, image }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={style.modal}
      overlayClassName={style.overlay}
      ariaHideApp={false} 
    >
      <button onClick={onRequestClose} className={style.closeBtn}>
        &times;
      </button>
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={style.modalImage}
      />
    </ReactModal>
  );
};

export default ImageModal;
