import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import MoviePage from "./components/MoviePage";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import TVShowPage from "./components/TVShowPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navbar-horizontal">
          <Navbar />
        </div>
        <div className="navbar-vertical">
          <Navbar2 />
        </div>
        <Switch>
          <Route exact path={"/movie"} component={MoviePage} />
          <Route exact path={"/tvshow"} component={TVShowPage} />
          <Route exact path={"/"} component={MoviePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
