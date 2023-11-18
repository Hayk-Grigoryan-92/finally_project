import "./style.scss";
import { AdminPageTittle } from "../../../components/adminPageTittle";

export const AdminCategories = () => {
  return (
    <div className="adminCategories">
      <AdminPageTittle tittle="Categories" />
      <div className="categoriesContent">
        <div className="addCategorie">
          <div>Add categorie Image</div>
          <div>Add Categorie Name</div>
        </div>
      </div>
    </div>
  );
};
