import "./style.scss";
import { AdminPageTittle } from "../../../components/adminPageTittle";
import { useEffect, useState } from "react";
import { Modal } from "../../../components/modal";
import { ManageCategory } from "./components/manage-category";
import {
  deleteCategory, getCategoryList,
} from "../../../platform/api/category-api";
import { DeleteDialog } from "../../../components/deleteDialog";
import { getProductsList } from "../../../platform/api/product-api";
import { Loader } from "../../../components/loader";

export const AdminCategories = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [disableDeleteCategory, setDisableDeleteCategory] = useState("");
  const [categorieDataList, setCategorieDataList] = useState([]);
  const [productDataList, setProductDataList] = useState([]);
  const [pageLoader, setPageLoader] = useState(true)
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    getCategoryListData();
    getProductstData();
  }, []);

  const getProductstData = async () => {
    const result = await getProductsList();
    if (result.data) {
      setProductDataList(result.data);
    }
  };

  const closeDialog = () => {
    setIsOpenModal(false);
  };

  const getCategoryListData = async () => {
    setPageLoader(true)
    const result = await getCategoryList();
    if (result.data) {
      setCategorieDataList(result.data);
      setPageLoader(false)
    }
  };

  const handleEdit = (data) => {
    setSelectedItem(data);
    setIsOpenModal(true);
  };

  const openDeleteModal = (categoryData) => {
    setSelectedItem(categoryData);
    setIsOpenDeleteModal(true);
    if (productDataList.length) {
      const findProduct = productDataList.find(
        (x) => x.categoryId === categoryData._id
      );

      if (findProduct) {
        setDisableDeleteCategory(
          `There are products in ${categoryData.name} category, you can't delete it`
        );
        setIsOpenDeleteModal(true);
      }
    }
  };
  

  const handleDelete = async () => {
    await deleteCategory(selectedItem._id);
    closeDeleteModal();
    getCategoryListData();
  };

  const closeDeleteModal = () => {
    setIsOpenDeleteModal(false);
    setSelectedItem(null);
    setDisableDeleteCategory("");
  };

  return (
    <div className="adminContent">
      <AdminPageTittle tittle="Categories" />
      <div className="contentView">
        <div className="addOption">
          <button onClick={() => setIsOpenModal(true)}>Add Categorie</button>
        </div>

        {categorieDataList.length && !pageLoader ? (
          <div className="categorieList">
            {categorieDataList.map((item, index) => {
              return (
                <div className="categorieItem" key={index}>
                  <div className="categoryContent">
                    <div
                      className="categorieImg"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    />
                    <div className="categorieName">{item.name}</div>
                  </div>
                  <div className="categoryButtons">
                    <button onClick={() => handleEdit(item)}>Edit</button>
                    <button
                      onClick={() => {
                        openDeleteModal(item);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : <div style={{minHeight:'100vh'}}>
        <Loader/>
      </div>}
      </div>

      {isOpenModal ? (
        <Modal onClose={closeDialog} title={"Add Categorie"}>
          <ManageCategory
            onClose={closeDialog}
            updateList={getCategoryListData}
            manageData={selectedItem}
          />
        </Modal>
      ) : null}

      {isOpenDeleteModal ? (
        <Modal onClose={closeDeleteModal}>
          <DeleteDialog
            onClose={closeDeleteModal}
            onDelete={() => handleDelete()}
            disableDeleteText={disableDeleteCategory}
            title={"Are you sure you want to remove the product"}
          />
        </Modal>
      ) : null}
    </div>
  );
};
