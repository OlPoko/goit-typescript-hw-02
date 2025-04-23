import ReactModal from "react-modal";
import style from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={style.modal}
      overlayClassName={style.overlay}
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
