import "./App.css";
import { ContentWrapper } from "./components/ContentWrapper";
import { Header } from "./components/Header";
import { SearchBar } from "./components/Searchbar";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-8 space-y-12">
        <ContentWrapper>
          <SearchBar />

          {/* Section 1 */}
          <section className="bg-gray-50 rounded-xl p-6 shadow-sm mt-8">
            <h2 className="text-xl font-semibold mb-4">Featured Movies</h2>
            <p className="text-sm text-muted-foreground">
              Explore trending movies curated just for you.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-gray-50 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Top Actors</h2>
            <p className="text-sm text-muted-foreground">
              Discover profiles of popular actors from your favorite films.
            </p>
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
