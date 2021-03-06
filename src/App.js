import "./App.css";
import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <main className="App">
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
      </main>
    </Router>
  );
}

export default App;
