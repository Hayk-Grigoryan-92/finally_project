import { useState } from "react";
import { useEffect } from "react";
import { addProduct, editProduct } from "../../../../platform/api/product-api";

export const ManageProduct = ({ manageData, onClose, updateList }) => {
    const [productData, setProductData] = useState({
      image: "",
      name: "",
      description:'',
      price:null,
      rate:null
    });
  
    useEffect(() => {
      if (manageData) {
        console.log(manageData);
        setProductData({
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
        setProductData({ ...productData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  }

  
  
    const handleChange = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value });
    };
  
    const handleClick = async () => {
      if (productData.image.length && productData.name.length) {
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
  