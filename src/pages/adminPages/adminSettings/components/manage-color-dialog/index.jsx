import { useEffect, useState } from "react";
import { addSize, editSize } from "../../../../../platform/api/size-api";
import { addColor, editColor } from "../../../../../platform/api/color-api";

export const ManageColorDialog = ({ manageData, updateColorList, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    color: ""
  });

  useEffect(() => {
    if (manageData) {
      setFormData({ ...formData, name: manageData.name });
      setFormData({ ...formData, color: manageData.color });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    if (formData.name.length) {
      if (manageData) {
        await editColor(formData, manageData._id);
        updateColorList();
        onClose();
      } else {
        const result = await addColor(formData);
        if (result.data) {
          updateColorList();
          onClose();
        }
      }
    }
  };

  return (
    <div className="modal_body_categorie">
      <div className="content_box">
        <div className="add_name_box">
          <label>
            <input
              value={formData.name}
              type="text"
              placeholder="Create color"
              name="name"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="add_name_box">
          <label>
            <input
              value={formData.color}
              type="color"
              name="color"
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      <div className="confirmButton">
        <button className="confirmBtn" onClick={handleClick}>
          {manageData ? "Save" : "ADD"}
        </button>
        <button className="confirmBtn" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};
