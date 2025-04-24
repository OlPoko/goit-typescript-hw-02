import { useEffect, useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchBar/SearchBar";
import { getImages, UnsplashImage } from "./components/FetchImages/FetchImages";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import toast from "react-hot-toast";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

type SelectedImage = UnsplashImage | null;

const App = () => {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<SelectedImage>(null);

  const handleImageClick = (image: UnsplashImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleSearch = (searchTerm: string) => {
    setQuery(searchTerm);
    setImages([]);
    setPage(1);
  };

  const loadMore = () => {
    if (!loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      setError(false);

      try {
        const imageResults: UnsplashImage[] = await getImages(query, page);
        if (imageResults.length === 0 && page === 1) {
          toast.error("Не знайдено зображень за запитом.");
        } else if (imageResults.length > 0) {
          toast.success("Зображення знайдено!");
          setImages((prevImages) => [...prevImages, ...imageResults]);
        }
      } catch (error) {
        setError(true);
        toast.error("Не вдалося отримати зображення. Спробуйте ще раз.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  return (
    <>
      <SearchForm onSubmit={handleSearch} />
      {error && (
        <ErrorMessage message="Помилка при завантаженні зображень. Спробуйте ще раз." />
      )}
      {loading && <Loader loading={loading} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onRequestClose={closeModal}
          image={selectedImage}
        />
      )}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={loadMore} />}
    </>
  );
};

export default App;
