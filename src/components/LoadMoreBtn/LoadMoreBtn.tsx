import style from "./LoadMoreBtn.module.css";
import { FC } from "react";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={style.LoadMoreBtn} onClick={onClick}>
      Load more images
    </button>
  );
};

export default LoadMoreBtn;
