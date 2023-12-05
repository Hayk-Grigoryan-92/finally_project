import { useState } from "react";
import {
  addSettings,
  editSettings,
} from "../../../../platform/api/settings-api";

export const ManageSettings = ({ manageData, onClose, updateColorsList }) => {
  const [colorData, setColorData] = useState({
    color: "",
    name: "",
  });

  const handleChange = (e) => {
    setColorData({ ...colorData, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    if (colorData.color.length && colorData.name.length) {
      if (manageData) {
        await editSettings(colorData, manageData._id);
        updateColorsList();
        onClose();
      } else {
        const result = await addSettings(colorData);
        console.log(colorData);
        if (result.data) {
          updateColorsList();
          onClose();
        }
      }
    }
  };

  return (
    <div className="modal_body_categorie">
      <div className="content_box">
        <div className="color_box">
          <label>
            <input
              type="color"
              hidden={true}
              name="color"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="add_name_box">
          <label>
            <input
              type="text"
              placeholder="Create color name"
              name="name"
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
