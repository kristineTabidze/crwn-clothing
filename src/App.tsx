import { Switch, Route, Router } from "react-router-dom";
import "./App.css";
import Directory from "./components/directory/directory.component";
import { HatsPage } from "./pages/HatsPage";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import React from "react";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/SignInAndSignUp";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/hats" component={HatsPage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/sign-in" component={SignInAndSignUp} />
        </Switch>
      </div>
    </>
  );
}

export default App;
