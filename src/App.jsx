import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages";
import location from "./components/locationComponent";
import "./Assets/default.min.css";
import "./Assets/card.min.css";


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Main} />
        <Route exact path="/map" component={location} />
      </Router>
    </div>
  );
}

export default App;
