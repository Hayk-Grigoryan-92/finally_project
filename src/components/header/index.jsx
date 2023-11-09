import "./style.scss";
import "../../assets/styles/index.scss";
import { NavLink } from "react-router-dom";
import "../../assets/icons/icon/style.css";
import { routerPage } from "../../routes";

export const Header = () => {
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
              <span className="shoppingCartZero">0</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
