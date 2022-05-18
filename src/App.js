import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import DetailMoviePage from "./pages/DetailMoviePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Topbar />
        <div className="App-main">
          <Navbar />
          <Switch>
            <Route exact path={"/home"} component={HomePage} />
            <Route exact path={"/movie/:movieID"} component={DetailMoviePage} />
            <Route exact path={"/"} render={() => <Redirect to="/home" />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
