import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
