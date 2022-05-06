import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
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
            <Route exact path={"/"} render={() => <Redirect to="/home" />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
