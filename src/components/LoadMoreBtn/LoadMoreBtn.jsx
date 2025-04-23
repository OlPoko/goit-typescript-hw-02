import style from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={style.LoadMoreBtn} onClick={onClick}>
      Load more images
    </button>
  );
};

export default LoadMoreBtn;
