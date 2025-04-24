import axios from "axios";

interface ImageUrls {
  small: string;
  regular: string;
}

export interface UnsplashImage {
  id: string;
  alt_description: string;
  urls: ImageUrls;
}

interface UnsplashApiResponse {
  results: UnsplashImage[];
}

export const getImages = async (
  searchTerm: string,
  page: number = 1
): Promise<UnsplashImage[]> => {
  const searchParams = new URLSearchParams({
    query: searchTerm,
    client_id: "oHXlI6n6v6pKe9qfXSLAmChSr3LOxLMwz3FApJ6cpxA",
    page: String(page),
    per_page: "12",
  });

  try {
    const response = await axios.get<UnsplashApiResponse>(
      `https://api.unsplash.com/search/photos?${searchParams}`
    );
    return response.data.results;
  } catch (error) {
    console.error("❌ Помилка при запиті до Unsplash:", error);
    throw error;
  }
};
