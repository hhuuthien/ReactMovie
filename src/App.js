import "./App.css";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Movie from "./components/Movie";
import Movie2 from "./components/Movie2";

function App() {
  return (
    <div className="App">
      <div className="navbar-horizontal">
        <Navbar />
      </div>
      <div className="navbar-vertical">
        <Navbar2 />
      </div>
      <Movie />
      <Movie2 />
    </div>
  );
}

export default App;
