import { useEffect, useState } from "react";
import {
  addCategory,
  editCategory,
} from "../../../../../platform/api/category-api";

export const ManageCategory = ({ manageData, onClose, updateList }) => {
  const [categorieData, setCategorieData] = useState({
    image: "",
    name: "",
  });

  useEffect(() => {
    if (manageData) {
      console.log(manageData);
      setCategorieData({
        name: manageData.name,
        image: manageData.image,
      });
    }
  }, [manageData]);

  function encodeImageFileAsURL(element) {
    console.log(element);

    var file = element.target.files[0];
    console.log(file);
    if (file) {
      var reader = new FileReader();
      reader.onloadend = function () {
        setCategorieData({ ...categorieData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  }

  const handleChange = (e) => {
    setCategorieData({ ...categorieData, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    if (categorieData.image.length && categorieData.name.length) {
      if (manageData) {
        await editCategory(categorieData, manageData._id);
        updateList();
        onClose();
      } else {
        const result = await addCategory(categorieData);

        if (result.data) {
          updateList();
          onClose();
        }
      }
    }
  };

  return (
    <div className="modal_body_categorie">
      <div className="content_box">
        <div className="image_box">
          <label>
            <div
              className={`${categorieData.image ? "added_image" : ""}`}
              style={{ backgroundImage: `url('${categorieData.image}')` }}
            >
              {!categorieData.image ? <p>upload image</p> : null}
            </div>
            <input
              className="upload_image"
              type="file"
              accept="image/*"
              hidden={true}
              name="image"
              onChange={encodeImageFileAsURL}
            />
          </label>
        </div>
        <div className="add_name_box">
          <label>
            <input
              type="text"
              placeholder="Create categorie name"
              name="name"
              value={categorieData.name}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      <div className="confirmButton">
        <button  onClick={handleClick}>
          {manageData ? "Save" : "ADD"}
        </button>
        <button  onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};
