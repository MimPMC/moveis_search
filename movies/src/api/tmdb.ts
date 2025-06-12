import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "23ee64b57194d16608a936bd8e2a0b0f";

// Cache for genre ID -> name mapping
let genreMap: Record<number, string> = {};

async function fetchGenreMap(): Promise<Record<number, string>> {
  if (Object.keys(genreMap).length === 0) {
    const res = await axios.get(`${BASE_URL}/genre/movie/list`, {
      params: { api_key: API_KEY },
    });

    genreMap = res.data.genres.reduce(
      (map: Record<number, string>, genre: { id: number; name: string }) => {
        map[genre.id] = genre.name;
        return map;
      },
      {}
    );
  }
  return genreMap;
}

export async function fetchMoviesByGenre(genreId: number, limit = 20) {
  try {
    const genreMap = await fetchGenreMap();

    const res = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_genres: genreId,
        sort_by: "popularity.desc",
        page: 1,
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return res.data.results.slice(0, limit).map((movie: any) => ({
      id: movie.id,
      image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      label: movie.title,
      year: movie.release_date ? movie.release_date.slice(0, 4) : "N/A",
      rating: movie.vote_average.toFixed(1),
      genres: movie.genre_ids
        .map((id: number) => genreMap[id])
        .filter(Boolean)
        .join(", "),
    }));
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    return [];
  }
}

export async function searchMovies(query: string, limit = 20) {
  if (!query.trim()) return [];

  try {
    const genreMap = await fetchGenreMap();

    const res = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query,
        page: 1,
        include_adult: false,
      },
    });

    return res.data.results.slice(0, limit).map((movie: any) => ({
      id: movie.id,
      image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      label: movie.title,
      year: movie.release_date ? movie.release_date.slice(0, 4) : "N/A",
      rating: movie.vote_average.toFixed(1),
      genres: movie.genre_ids
        .map((id: number) => genreMap[id])
        .filter(Boolean)
        .join(", "),
    }));
  } catch (error) {
    console.error("Failed to search movies:", error);
    return [];
  }
}

