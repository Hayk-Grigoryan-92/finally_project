import "./App.scss";
import { Header } from "./components/header";
import { Home } from "./pages/web_Pages/home";
import { Footer } from "./components/footer";
import "./assets/styles/index.scss";
import { Shop } from "./pages/web_Pages/shop";
import { Route, Routes, useLocation } from "react-router-dom";
import { routerPage } from "./routes";
import { Contact } from "./pages/web_Pages/contact";
import { ShopDetails } from "./pages/web_Pages/shopDetails";
import { ShoppingCart } from "./pages/web_Pages/shoppingCart";
import { Checkout } from "./pages/web_Pages/checkout";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={routerPage.HOME} element={<Home />} />
        <Route path={routerPage.SHOP} element={<Shop />} />
        <Route path={routerPage.CONTACT} element={<Contact />} />
        <Route path={routerPage.SHOP_DETAILS} element={<ShopDetails />} />
        <Route path={routerPage.SHOPPING_CART} element={<ShoppingCart />} />
        <Route path={routerPage.CHECKOUT} element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
