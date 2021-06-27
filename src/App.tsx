import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Route, BrowserRouter } from "react-router-dom";
import { HatsPage } from "./pages/HatsPage";
import { ShopPage } from "./pages/ShopPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
        <Route exact path="/shop" component={ShopPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
