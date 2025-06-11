import "./App.css";
import { ContentWrapper } from "./components/ContentWrapper";
import { Header } from "./components/Header";
import { MovieCarousel } from "./components/MovieCarousel";
import { SearchBar } from "./components/Searchbar";

const featuredMovies = [
  {
    id: "1",
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/26/Moana_Teaser_Poster.jpg",
    label: "Movie 1",
  },
  {
    id: "2",
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/26/Moana_Teaser_Poster.jpg",
    label: "Movie 2",
  },
  {
    id: "3",
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/26/Moana_Teaser_Poster.jpg",
    label: "Movie 3",
  },
  {
    id: "4",
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/26/Moana_Teaser_Poster.jpg",
    label: "Movie 4",
  },
  {
    id: "1",
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/26/Moana_Teaser_Poster.jpg",
    label: "Movie 1",
  },
  {
    id: "2",
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/26/Moana_Teaser_Poster.jpg",
    label: "Movie 2",
  },
  {
    id: "3",
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/26/Moana_Teaser_Poster.jpg",
    label: "Movie 3",
  },
  {
    id: "4",
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/26/Moana_Teaser_Poster.jpg",
    label: "Movie 4",
  },
];

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-8 space-y-12">
        <ContentWrapper>
          <SearchBar  />
          <section className="flex flex-col w-full gap-4 py-8">
            <MovieCarousel title="Featured Movies" items={featuredMovies} />
            <MovieCarousel title="Featured Movies" items={featuredMovies} />
          </section>
          {/* Carousel Section */}
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
