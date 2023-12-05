import "./style.scss";
import { AdminPageTittle } from "../../../components/adminPageTittle";
import { useEffect, useState } from "react";
import { Modal } from "../../../components/modal";
import { ManageCategory } from "./components/manage-category";
import { getCategoryList } from "../../../platform/api/category-api";

export const AdminCategories = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [categorieDataList, setCategorieDataList] = useState([]);

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    getCategoryListData();
  }, []);

  const closeDialog = () => {
    setIsOpenModal(false);
  };

  const getCategoryListData = async () => {
    const result = await getCategoryList();
    if (result.data) {
      console.log(result.data);
      setCategorieDataList(result.data);
    }
  };

  const handleEdit = (data) => {
    setSelectedItem(data);
    setIsOpenModal(true);
  };

  return (
    <div className="adminContent">
      <AdminPageTittle tittle="Categories" />
      <div className="contentView">
        <div className="addOption">
          <button onClick={() => setIsOpenModal(true)}>Add Categorie</button>
        </div>

        {categorieDataList.length ? (
          <div className="categorieList">
            {categorieDataList.map((item, index) => {
              return (
                <div className="categorieItem" key={index}>
                  <div className="categoryContent">
                    <div
                      className="categorieImg"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    ></div>
                    <div className="categorieName">{item.name}</div>
                  </div>
                  <div className="categoryButtons">
                    <button onClick={() => handleEdit(item)}>Edit</button>
                    <button>Delete</button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
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
    </div>
  );
};
