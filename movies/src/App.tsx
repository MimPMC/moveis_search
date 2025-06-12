import { useEffect, useState } from "react";
import { fetchMoviesByGenre } from "./api/tmdb";
import "./App.css";
import { ContentWrapper } from "./components/ContentWrapper";
import { Header } from "./components/Header";
import { MovieCarousel } from "./components/MovieCarousel";
import { SearchBar } from "./components/Searchbar";

type Genre = {
  id: number;
  name: string;
};

export interface Movie {
  id: number;
  image: string;
  label: string;
  year: string;
  rating: string;
  genres: string;
}

function App() {
  const genres: Genre[] = [
    { id: 28, name: "Action" },
    { id: 35, name: "Comedy" },
  ];

  const [moviesByGenre, setMoviesByGenre] = useState<Record<number, Movie[]>>(
    {}
  );

  useEffect(() => {
    async function loadMovies() {
      const results = await Promise.all(
        genres.map(({ id }) => fetchMoviesByGenre(id))
      );

      const moviesMap: Record<number, Movie[]> = {};
      genres.forEach(({ id }, index) => {
        moviesMap[id] = results[index];
      });

      setMoviesByGenre(moviesMap);
    }

    loadMovies();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-8 space-y-12 mt-18">
        <ContentWrapper>
          <SearchBar />
          <section className="flex flex-col w-full gap-4 py-8">
            {genres.map(({ id, name }) => {
              const movies = moviesByGenre[id] || [];
              return (
                movies.length > 0 && (
                  <MovieCarousel
                    key={id}
                    title={`Popular ${name} Movies`}
                    items={movies}
                  />
                )
              );
            })}
          </section>
        </ContentWrapper>
      </main>
      <footer className="bg-gray-900 text-white text-center py-6">
        <ContentWrapper>
          <p className="text-sm">The Movie Finder</p>
        </ContentWrapper>
      </footer>
    </div>
  );
}

export default App;
