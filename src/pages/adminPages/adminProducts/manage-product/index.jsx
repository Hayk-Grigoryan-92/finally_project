import {useState} from "react";
import {useEffect} from "react";
import {addProduct, editProduct} from "../../../../platform/api/product-api";
import {getSizesList} from "../../../../platform/api/size-api";
import {getColorList} from "../../../../platform/api/color-api";
import {getCategoryList} from "../../../../platform/api/category-api";

export const ManageProduct = ({manageData, onClose, updateList}) => {
    const [productData, setProductData] = useState({
        image: null,
        name: "",
        description: "",
        price: 0,
        rate: 0,
        size: [],
        categoryId: null,
        colorId: null
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
                price: manageData.price,
                rate: manageData.rate,
                size: manageData.size,
                categoryId: manageData.categoryId,
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
                setProductData({...productData, image: reader.result});
            };
            reader.readAsDataURL(file);
        }
    }

    useEffect(() => {
        getAllInfoData()

    }, []);


    const getAllInfoData = async () => {
        const result = Promise.all([getCategoryList(), getColorList(), getSizesList()]).then(data => {
            setCategorieDataList(data[0].data)
            setColorList(data[1].data)
            setSizeList(data[2].data)
        })
    }

    const handleChange = (e) => {
        setProductData({...productData, [e.target.name]: e.target.value});
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


    const selectColor = (e) => {
        console.log(e.target.value)
        setProductData({...productData, colorId: e.target.value})
    }

    const selectCategory = (e) => {
        setProductData({...productData, categoryId: e.target.value})
    }

    const selectSizeList = (id) => {
        let index = productData.size.indexOf(id)
        let newSizes = productData.size
        if (index >= 0) {
            newSizes.splice(index,1)
        } else {
            newSizes.push(id)
        }
        setProductData({...productData, size: newSizes})
    }

    return (
        <div className="modal_body_categorie">
            <div className="content_box">
                <div className="image_box">
                    <label>
                        <div
                            className={`${productData.image ? "added_image" : ""}`}
                            style={{backgroundImage: `url('${productData.image}')`}}
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
                            <select
                                className="categorieList"
                                onChange={selectCategory}>
                                <option value="">Select Category</option>
                                {categorieDataList.map((item, index) => {

                                    return (
                                        <option
                                            value={item._id}
                                            key={index}
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
                            <select
                                className="sizeSelect"
                                onChange={selectColor}>
                                <option value="">Select Color</option>

                                {colorList.map((item, index) => {
                                    return (
                                        <option
                                            style={{color: `${item.color}`}}
                                            key={index}
                                            value={item._id}
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
                                        checked={productData.size.includes(item._id)}
                                        type="checkbox"
                                        onChange={() => selectSizeList(item._id)}
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
