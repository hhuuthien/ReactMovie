import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path={"/home"} component={HomePage} />
          <Route exact path={"/"} render={() => <Redirect to="/home" />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
