import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { HatsPage } from "./pages/HatsPage";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import SignInAndSignUp from "./pages/SignInAndSignUp";

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  let unsubscribeFromAuth: any = null;
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef?.onSnapshot((snapshot) => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      }
      setCurrentUser(user);
    });
    return () => unsubscribeFromAuth();
  }, []);

  return (
    <>
      <Header currentUser={currentUser} />
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
};

export default App;
