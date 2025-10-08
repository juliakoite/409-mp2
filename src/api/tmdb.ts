import axios from "axios";

const token = process.env.REACT_APP_TMDB_API_KEY;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export async function searchmovies(query: string) {
  if (!query.trim()) return [];

    const res = await api.get("/search/movie", {
      params: { query, include_adult: false, language: "en-US", page: 1 },
    });
    console.log("✅ TMDB API response:", res.data);
    return res.data.results;
  
}
