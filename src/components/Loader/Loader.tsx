import style from "./Loader.module.css";
import ClipLoader from "react-spinners/ClipLoader";

interface LoaderProps {
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  return (
    loading && (
      <div className={style.loader}>
        <ClipLoader color="#36d7b7" loading={loading} size={50} />
      </div>
    )
  );
};

export default Loader;
