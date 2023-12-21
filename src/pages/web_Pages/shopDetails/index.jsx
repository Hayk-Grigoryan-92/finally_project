import "./style.scss";
import product1 from "../../../assets/images/product-1.jpg";
import product2 from "../../../assets/images/product-2.jpg";
import product3 from "../../../assets/images/product-3.jpg";
import product4 from "../../../assets/images/product-4.jpg";
import { useEffect, useState } from "react";
import { DetailsDescription } from "./detailsDescription";
import { ProductList } from "../../../components/productList";
import { DetailsInformation } from "./detailsInformation";
import { DetailsReview } from "./detailsReview";
import { useProductsContext } from "../../../context/products";
import { getSizesList } from "../../../platform/api/size-api";
import { getColorList } from "../../../platform/api/color-api";
import {
  getProductDataById,
  getProductsList,
} from "../../../platform/api/product-api";
import { useParams } from "react-router-dom";

export const ShopDetails = () => {
  const [productDetail, setProductDetails] = useState(null);

  const { id } = useParams();
  console.log(id);
  const [sizeList, setSizeList] = useState([]);
  // const [colorList, setColorList] = useState([]);

  const [detailsTabData, setDetailsTabData] = useState([
    "Description",
    "Information",
    "Reaviews (0)",
  ]);

  const { addToProduct } = useProductsContext();
  const [count, setCount] = useState(1);

  function handleClickMinus() {
    if (count > 1) {
      setCount(count - 1);
    }
  }
  function handleClickPlus() {
    if (count >= 1) {
      setCount(count + 1);
    }
  }

  function addToCart() {
    addToProduct({
      name: "test product",
      desc: "lorem",
      price: 400,
      count,
    });
  }

  const [activeTab, setActiveTab] = useState(0);

  function handleClick(index) {
    setActiveTab(index);
  }

  const getProductData = async () => {
    const result = await getProductDataById(id);
    if (result) {
      setProductDetails(result.data);
    }
  };
  useEffect(() => {
    getSizeData();
    // getColorData();
  }, []);

  const getSizeData = async () => {
    const result = await getSizesList();
    if (result.data) {
      setSizeList(result.data);
    }
  };

  // const getColorData = async () => {
  //   const result = await getColorList();
  //   if (result.data) {
  //     setColorList(result.data);
  //   }
  // };

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    if (id) {
      getProductData();
    }
  }, []);

  return (
    productDetail && (
      <div className="shopDetails G_container">
        <div className="shopPageLocation">
          <span>Home /</span>
          <span>Shop /</span>
          <span className="exactLocation">Shop Details</span>
        </div>

        <div className="detailsContainer">
          <div
            className="detailsImg"
            style={{ backgroundImage: `url('${productDetail.image}')` }}
          ></div>

          <div className="detailsInfo">
            <div className="productName">
              <h3>{productDetail.name}</h3>
            </div>
            <div className="productRate">
              <span className="icon-star_icon"></span>
              <span className="icon-star_icon"></span>
              <span className="icon-star_icon"></span>
              <span className="icon-star_icon"></span>
              <span className="icon-rateStar"></span>
              <span className="reviews">( 99 reviews ) </span>
            </div>
            <div className="productPrice">
              <span>{productDetail.price}</span>
            </div>
            <div className="productDescription">
              <p>{productDetail.description}</p>
            </div>
            <div className="productSizes">
              <span>Sizes:</span>
              {productDetail.size.map((item, index) => {
                return (
                  <div key={index}>
                    <label>
                      <input type="radio" />
                    </label>
                    {sizeList.find((x) => x._id === item).name}
                  </div>
                );
              })}
            </div>

            <div className="productColors">
              <span>Colors:</span>
              {/* {colorList.map((item, index) => {
              return (
                <div key={index}>
                  <label>
                    <input type="radio" />
                  </label>
                  {item.name}
                </div>
              );
            })} */}
            </div>

            <div className="addProduct">
              <div className="addQuantity">
                <button className="minus" onClick={handleClickMinus}>
                  -
                </button>
                <div className="addNumberText">
                  <label>
                    <span>{count}</span>
                  </label>
                </div>
                <button className="plus" onClick={handleClickPlus}>
                  +
                </button>
              </div>
              <div className="addButton">
                <button onClick={addToCart}>
                  <span className="icon-shopping"></span>
                  <span>Add To Cart</span>
                </button>
              </div>
            </div>

            <div className="productShow">
              <span className="share">Share on:</span>
              <span className="icon-facebook"></span>
              <span className="icon-twitter"></span>
              <span className="icon-linkedin"></span>
              <span className="icon-instagram"></span>
            </div>
          </div>
        </div>

        <div className="infoContainer">
          <div className="productInfo">
            {detailsTabData.map((item, index) => {
              return (
                <div onClick={() => handleClick(index)} key={index}>
                  {item}
                </div>
              );
            })}
          </div>

          <div className="productDetails">
            {activeTab === 0 ? <DetailsDescription /> : null}
            {activeTab === 1 ? <DetailsInformation /> : null}
            {activeTab === 2 ? <DetailsReview /> : null}
          </div>
        </div>

        <div className="productDetailsList">
          <h2>You May Also Like</h2>
          <div className="productDetailsListContainer">
            {productList.map((item, index) => {
              return (
                <ProductList className="productItem" key={index} data={item} />
              );
            })}
          </div>
        </div>
      </div>
    )
  );
};
