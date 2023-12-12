import './style.scss'
import { useEffect, useState } from "react";
import { deleteColor, getColorList } from "../../../../../platform/api/color-api";
import { Modal } from "../../../../../components/modal";
import { ManageColorDialog } from "../manage-color-dialog";
import { DeleteDialog } from "../../../../../components/deleteDialog";

export const ColorContent = () => {

  const [selectedItem, setSelectedItem] = useState(null);
  const [colorList, setColorList] = useState([]);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const toggleModal = (value) => {
    setIsOpenModal(value);
    if (!value) {
      setSelectedItem(null);
    }
  };

  useEffect(() => {
    getColorListData();
  }, []);

  const getColorListData = async () => {
    const result = await getColorList();
    if (result.data) {
      setColorList(result.data);
    }
  };

  const handleDelete = async () => {
    await deleteColor(selectedItem._id);
    setIsOpenDeleteModal(false);
    setSelectedItem(null);
    getColorListData();
  };
  
  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className='colorSection'>
      <div className="colorHeader">
        <div className="addOption">
          <button onClick={() => toggleModal(true)}>Add Color</button>
        </div>
      </div>

      {colorList.length ? (
        <div className="colorSettingList">
          {colorList.map((item, index) => {
            return (
              <div key={index} className="colorItem G-flex-column" style={{backgroundColor:`${item.color}`}}>
                <p className="colorName">{item.name}</p>
                <div className="color_action G-justify-between">
                  <button
                    onClick={() => {
                      handleSelectItem(item);
                      setIsOpenModal(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleSelectItem(item);
                      setIsOpenDeleteModal(true);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}

      {isOpenModal ? (
        <Modal
          onClose={() => toggleModal(false)}
          title={selectedItem ? "Edit color" : "Add color"}
        >
          <ManageColorDialog
            updateColorList={getColorListData}
            onClose={() => toggleModal(false)}
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
          title={"Delete Size"}
        >
          <DeleteDialog
            onClose={() => {
              setIsOpenDeleteModal(false);
              setSelectedItem(null);
            }}
            onDelete={() => handleDelete()}
            title={"Are you sure you want to remove the color"}
          />
        </Modal>
      ) : null}
    </div>
  )
};
