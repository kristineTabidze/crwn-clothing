import React from "react";
import { Switch, Route } from "react-router-dom";
import Directory from "./components/directory/directory.component";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";

const Main = () => {
  return (
    <Switch>
      {" "}
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" component={Directory} />
      <Route exact path="/hats" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
    </Switch>
  );
};

export default Main;
