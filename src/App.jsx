import "./App.scss";
import { Header } from "./components/header";
import { Home } from "./pages/web_Pages/home";
import { Footer } from "./components/footer";
import "./assets/styles/index.scss";
import { Shop } from "./pages/web_Pages/shop";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { routerPage } from "./routes";
import { Contact } from "./pages/web_Pages/contact";
import { ShopDetails } from "./pages/web_Pages/shopDetails";
import { ShoppingCart } from "./pages/web_Pages/shoppingCart";
import { Checkout } from "./pages/web_Pages/checkout";
import { useEffect } from "react";
import { Login } from "./pages/web_Pages/login";
import { Registration } from "./pages/web_Pages/registration";
import { useState } from "react";
import { useUsersContext } from "./context/users";
import { AdminPage } from "./pages/adminPages";

function App() {

  const [isloading, setIsLoading] = useState(false)

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const [token, setToken] = useState("");
  const { users } = useUsersContext(); 

  useEffect(() => {
    let tokenData = localStorage.getItem("token");
    setToken(tokenData);
  }, []);

 

  return (
    <div className="App">
      {token && users ? (
        <AdminPage />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path={routerPage.HOME} element={<Home />} />
            <Route path={routerPage.SHOP} element={<Shop />} />
            <Route path={routerPage.CONTACT} element={<Contact />} />
            <Route path={routerPage.SHOP_DETAILS} element={<ShopDetails />} />
            <Route path={routerPage.SHOPPING_CART} element={<ShoppingCart />} />
            <Route path={routerPage.CHECKOUT} element={<Checkout />} />
            <Route path={routerPage.LOGIN} element={<Login />} />
            <Route path={routerPage.REGISTRATION} element={<Registration />} />
            <Route path={routerPage.ADMIN_PAGE} element={<AdminPage />} />
            <Route path={"/*"} element={<Navigate to={routerPage.HOME} />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
