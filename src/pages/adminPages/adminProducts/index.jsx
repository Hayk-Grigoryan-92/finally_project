import "./style.scss";
import { AdminPageTittle } from "../../../components/adminPageTittle";

export const AdminProducts = () => {
  return (
    <div className="adminProducts">
         <AdminPageTittle tittle="Products" />
      <div className="adminProductsContent">
        <div className="addProduct">
          <div>Select categorie ID</div>
          <div>Product Name</div>
          <div>Product Description</div>
          <div>Product Price</div>
          <div>Product Rate</div>
          <div>Product Image</div>
        </div>
      </div>
    </div>
  )
};
