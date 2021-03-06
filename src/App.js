import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import DetailMoviePage from "./pages/DetailMoviePage";
import HomePage from "./pages/HomePage";
import MovieListPage from "./pages/MovieListPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/list/:listType" component={MovieListPage} />
          <Route exact path="/movie/:movieID" component={DetailMoviePage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
