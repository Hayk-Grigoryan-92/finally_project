import "./style.scss";
import "../../assets/styles/index.scss";
import { NavLink } from "react-router-dom";
import "../../assets/icons/icon/style.css";
import { routerPage } from "../../routes";
import { useProductsContext } from "../../context/products";
import { useEffect, useState } from "react";

export const Header = () => {
  const { product } = useProductsContext();
  const [productsLength, setProductsLength] = useState(0);
  useEffect(() => {
    let sum = 0;
    product.forEach((element) => {
      sum += element.count;
    });
    setProductsLength(sum);
  }, [product]);
  return (
    <div className="header">
      <div className="G_container container">
        <div className="logo">
          <span className="multiSpan">MULTI</span>
          <span className="shopSpan">SHOP</span>
        </div>
        <div className="navbar">
          <div className="navbarPages">
            <ul>
              <li>
                <NavLink to={routerPage.HOME}>Home</NavLink>
              </li>
              <li>
                <NavLink to={routerPage.SHOP}>Shop</NavLink>
              </li>
              <li>
                <NavLink to={routerPage.CONTACT}>Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbarIcon">
            <NavLink to={routerPage.SHOPPING_CART}>
              <span className="icon-shopping shoppingCart"></span>
              <span className="shoppingCartZero">{productsLength}</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
