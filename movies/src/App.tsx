import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <header className="h-24 bg-gray-800 w-full">
      <div className="w-full h-full content-wrapper-header flex  justify-between items-center px-10 py-5">
        <nav>
          <Button>Sign In</Button>
        </nav>
      </div>
    </header>
  );
}

export default App;
