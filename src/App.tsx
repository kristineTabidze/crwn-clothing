import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import { HatsPage } from "./pages/HatsPage";
import { ShopPage } from "./pages/ShopPage";
import { HomePage } from "./pages/HomePage";
import Header from "./components/header/header.component";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header /> */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
        <Route exact path="/shop" component={ShopPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
