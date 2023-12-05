import "./style.scss";
import { NavLink } from "react-router-dom";
import { Logo } from "../logo";
import { routerPage } from "../../routes";

export const AdminPageNavbar = () => {
  return (
    <div className="adminPageNavbar">
      <div className="logoSection">
        <Logo />
      </div>
      <div className="categoriesSection">
        <div className="categories">
          <ul>
            <li>
              <NavLink to={routerPage.ADMIN_CATEGORIES}>Categories</NavLink>
            </li>
            <li>
              <NavLink to={routerPage.ADMIN_PRODUCTS}>Products</NavLink>
            </li>
            <li>
              <NavLink to={routerPage.ADMIN_NOTIFICATIONS}>
                Notifications
              </NavLink>
            </li>
            <li>
              <NavLink to={routerPage.ADMIN_SETTINGS}>Settings</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
