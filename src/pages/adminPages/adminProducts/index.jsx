import "./style.scss";
import { AdminPageTittle } from "../../../components/adminPageTittle";
import { useState } from "react";
import { Modal } from "../../../components/modal";
import { ManageProduct } from "./manage-product";
import { getProductsList } from "../../../platform/api/product-api";
import { useEffect } from "react";

export const AdminProducts = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [productDataList, setProductDataList] = useState([]);

  const closeDialog = () => {
    setIsOpenModal(false);
  };

  useEffect(() => {
    getProductstData();
  }, []);

  const handleEdit = (data) => {
    setSelectedItem(data);
    setIsOpenModal(true);
  };

  const getProductstData = async () => {
    const result = await getProductsList();
    if (result.data) {
      console.log(result.data);
      setProductDataList(result.data);
    }
  };

  return (
    <div className="adminContent">
      <AdminPageTittle tittle="Products" />
      <div className="contentView">
        <div className="addOption">
          <button onClick={() => setIsOpenModal(true)}>Add Product</button>
        </div>

        <div className="categoryButtons">
                    <button>Edit</button>
                    <button>Delete</button>
                  </div>
      </div>

      {isOpenModal ? (
        <Modal onClose={closeDialog} title={"Add Categorie"}>
          <ManageProduct
            onClose={closeDialog}
            updateList={getProductstData}
            manageData={selectedItem}
          />
        </Modal>
      ) : null}
    </div>
  );
};
