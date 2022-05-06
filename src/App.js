import "./App.css";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Movie from "./components/Movie";
import Movie2 from "./components/Movie2";
import ModalMovie from "./components/ModalMovie";

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
      <ModalMovie />
    </div>
  );
}

export default App;
