import "./style.scss";
import { AdminPageTittle } from "../../../components/adminPageTittle";
import { useState } from "react";
import { Modal } from "../../../components/modal";
import { ManageProduct } from "./manage-product";
import { deleteProduct, getProductsList } from "../../../platform/api/product-api";
import { useEffect } from "react";
import { DeleteDialog } from "../../../components/deleteDialog";

export const AdminProducts = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [productDataList, setProductDataList] = useState([]);
  

  const closeDialog = () => {
    setIsOpenModal(false);
    setSelectedItem(null)
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
      setProductDataList(result.data);
    }
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  const handleDelete = async () => {
    await deleteProduct(selectedItem._id);
    setIsOpenDeleteModal(false);
    setSelectedItem(null);
    getProductstData();
  };

  

  return (
    <div className="adminContent">
      <AdminPageTittle tittle="Products" />
      <div className="contentView">
        <div className="addOption">
          <button onClick={() => setIsOpenModal(true)}>Add Product</button>
        </div>

          {productDataList.length ? (
            <div className="productSection">
              {productDataList.map((item, index) => {
                return (
                  <div key={index} className="adminProductItem">
                    <div  className="prodictImage"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    ></div>
                    <span className="productName">{item.name}</span>
                    <div className="productDescription">{item.description}</div>
                    <span className="productPrice">{item.price} $</span>

                    <button
                      className="actionButton"
                      onClick={() => {
                        handleEdit(item)
                      }}
                    >
                      Edit
                    </button>
                    <button className="actionButton" onClick={() => {
                      handleSelectItem(item);
                      setIsOpenDeleteModal(true);
                    }}>Delete</button>
                  </div>
                );
              })}
            </div>
          ) : null}

        {isOpenModal ? (
          <Modal onClose={closeDialog} title={"Add Product"}>
            <ManageProduct
              onClose={closeDialog}
              updateList={getProductstData}
              manageData={selectedItem}
            />
          </Modal>
        ) : null}
          {isOpenDeleteModal ? (
        <Modal
          onClose={() => {
            setIsOpenDeleteModal(false);
            setSelectedItem(null);
          }}
          title={"Delete Product"}
        >
          <DeleteDialog
            onClose={() => {
              setIsOpenDeleteModal(false);
              setSelectedItem(null);
            }}
            onDelete={() => handleDelete()}
            title={"Are you sure you want to remove the product"}
          />
        </Modal>
      ) : null}
      </div>
    </div>
  );
};
