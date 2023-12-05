import "./style.scss";
import { AdminCategories } from "./adminCategories";
import { AdminProducts } from "./adminProducts";
import { AdminSettings } from "./adminSettings";
import { AdminNotifications } from "./adminNotifications";
import { AdminPageNavbar } from "../../components/adminPageNavbar";
import { Navigate, Route, Routes } from "react-router-dom";
import { routerPage } from "../../routes";

export const AdminPage = () => {
  return (
    <div className="aminPage">
      <div className="adminLeftSection">
        <AdminPageNavbar />
      </div>
      <div className="adminRightSection">
        <Routes>
          <Route path={routerPage.ADMIN_CATEGORIES} element={<AdminCategories/>}/>
          <Route path={routerPage.ADMIN_NOTIFICATIONS} element={<AdminNotifications/>} />
          <Route path={routerPage.ADMIN_PRODUCTS} element={<AdminProducts/>} />
          <Route path={routerPage.ADMIN_SETTINGS} element={<AdminSettings/>} />
          <Route path={'/*'} element={<Navigate to={routerPage.ADMIN_CATEGORIES}/>}/>
        </Routes>
      </div>
    </div>
  );
};
