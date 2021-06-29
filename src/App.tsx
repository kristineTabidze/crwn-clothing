import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Directory from "./components/directory/directory.component";
import { HatsPage } from "./pages/HatsPage";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import React from "react";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Directory} />
        <Route exact path="/hats" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Router>
    </div>
  );
}

export default App;
