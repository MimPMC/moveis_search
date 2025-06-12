import { useEffect, useState } from "react";
import { fetchMoviesByGenre } from "./api/tmdb";
import "./App.css";
import { ContentWrapper } from "./components/ContentWrapper";
import { Header } from "./components/Header";
import { MovieCarousel } from "./components/MovieCarousel";
import { SearchBar } from "./components/Searchbar";

function App() {
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);

  const actionGenreId = 28;
  const comedyGenreId = 35;

  useEffect(() => {
    async function loadMovies() {
      const [action, comedy] = await Promise.all([
        fetchMoviesByGenre(actionGenreId),
        fetchMoviesByGenre(comedyGenreId),
      ]);

      setActionMovies(action);
      setComedyMovies(comedy);
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
            {actionMovies.length > 0 && (
              <MovieCarousel
                title="Popular Action Movies"
                items={actionMovies}
              />
            )}
            {comedyMovies.length > 0 && (
              <MovieCarousel
                title="Popular Comedy Movies"
                items={comedyMovies}
              />
            )}
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
