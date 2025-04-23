import axios from "axios";

export const getImages = async (searchTerm, page = 1) => {
  const searchParams = new URLSearchParams({
    query: searchTerm,
    client_id: "oHXlI6n6v6pKe9qfXSLAmChSr3LOxLMwz3FApJ6cpxA",
    page,
    per_page: 12,
  });

  try {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?${searchParams}`
    );
    return response.data.results;
  } catch (error) {
    console.error("❌ Помилка при запиті до Unsplash:", error);
    throw error;
  }
};
