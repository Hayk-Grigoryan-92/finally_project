import { useState } from "react";
import { useEffect } from "react";
import { addProduct, editProduct } from "../../../../platform/api/product-api";
import { getSizesList } from "../../../../platform/api/size-api";
import { getColorList } from "../../../../platform/api/color-api";
import { getCategoryList } from "../../../../platform/api/category-api";

export const ManageProduct = ({ manageData, onClose, updateList }) => {
  const [productData, setProductData] = useState({
    image: "",
    name: "",
    description: "",
    price: null,
    rate: null,
    size: [],
    color: [],
  });

  const [sizeList, setSizeList] = useState([]);
  const [colorList, setColorList] = useState([]);
  const [categorieDataList, setCategorieDataList] = useState([]);

  useEffect(() => {
    if (manageData) {
      setProductData({
        name: manageData.name,
        image: manageData.image,
        description: manageData.description,
      });
      console.log(productData);
    }
  }, [manageData]);

  function encodeImageFileAsURL(element) {

    var file = element.target.files[0];
    console.log(file);
    if (file) {
      var reader = new FileReader();
      reader.onloadend = function () {
        setProductData({ ...productData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  }

  const getSizeListData = async () => {
    const result = await getSizesList();
    if (result.data) {
      setSizeList(result.data);
    }
  };

  const getColorListData = async () => {
    const result = await getColorList();
    if (result.data) {
      setColorList(result.data);
    }
  };

  const getCategoryListData = async () => {
    const result = await getCategoryList();
    if (result.data) {
      console.log(result.data);
      setCategorieDataList(result.data);
    }
  };

  useEffect(() => {
    getSizeListData();
    getColorListData();
    getCategoryListData()
    setProductData({ ...productData, size: sizeList });
    setProductData({ ...productData, color: colorList });
  }, []);

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    if (
      productData.image.length &&
      productData.name.length &&
      productData.description.length &&
      productData.price > 0
    ) {
      if (manageData) {
        await editProduct(productData, manageData._id);
        updateList();
        onClose();
      } else {
        const result = await addProduct(productData);

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
              className={`${productData.image ? "added_image" : ""}`}
              style={{ backgroundImage: `url('${productData.image}')` }}
            >
              {!productData.image ? <p>upload image</p> : null}
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
              placeholder="Create product name"
              name="name"
              value={productData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="add_name_box">
          <label>
            <input
              type="text"
              placeholder="Add product description"
              name="description"
              value={productData.description}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="add_name_box">
          <label>
            <input
              type="text"
              placeholder="Add product price"
              name="price"
              value={productData.price}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="add_name_box">
          <label>
            <input
              type="text"
              placeholder="Add product rate"
              name="rate"
              value={productData.rate}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="add_name_box">
          <label>
            {categorieDataList.length ? (
              <select className="categorieList">
                {categorieDataList.map((item, index) => {
                  return (
                    <option
                      // value={productData.size}
                      // name="size"
                      key={index}
                      // onChange={handleChange}
                    >
                      {item.name ? item.name : "Add product categorie"}
                    </option>
                  );
                })}
              </select>
            ) : null}
          </label>
        </div>
        <div className="add_name_box">
          <label>
            {colorList.length ? (
              <select className="sizeSelect">
                {colorList.map((item, index) => {
                  return (
                    <option
                    style={{ color: `${item.color}` }}
                      key={index}
                      // onChange={handleChange}
                    >
                      {item.name ? item.name : "Add product size"}
                    </option>
                  );
                })}
              </select>
            ) : null}
          </label>
        </div>
        <div className="size_check_box">
          {sizeList.map((item, index) => {
            return (
              <div
                key={index}
                className="sizeCheckBox"
              >
                <label>
                  <p>{item.name}</p>
                  <input
                    type="checkbox"
                    // onChange={handleChange}
                  />
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="confirmButton">
        <button onClick={handleClick}>{manageData ? "Save" : "ADD"}</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};
