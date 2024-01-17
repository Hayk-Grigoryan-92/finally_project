import "./style.scss";
import { useEffect, useState } from "react";
import { DetailsDescription } from "./detailsDescription";
import { ProductList } from "../../../components/productList";
import { DetailsInformation } from "./detailsInformation";
import { DetailsReview } from "./detailsReview";
import { useProductsContext } from "../../../context/products";
import { getSizesList } from "../../../platform/api/size-api";
import {
  getProductDataById,
} from "../../../platform/api/product-api";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../../../components/loader";
import { routerPage } from "../../../routes";
import { Link } from "react-router-dom";

export const ShopDetails = () => {
  const [productDetail, setProductDetails] = useState(null);
  const [productList] = useState([]);
  const [pageLoader, setPageLoader] = useState(true)
  const [detailsTabData] = useState([
    "Description",
    "Information",
    "Reaviews (0)",
  ]);

  const { id } = useParams();

  const [sizeList, setSizeList] = useState([]);

  const { addToProduct } = useProductsContext();
  const [count, setCount] = useState(1);
  const [activeTab, setActiveTab] = useState(0);

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
      ...productDetail,
      count,
    });
    
  }

  function handleClick(index) {
    setActiveTab(index);
  }

  useEffect(() => {
    if (id) {
      getProductData();
    }
    getSizeData();
  }, []);

  const navigate = useNavigate()

  const getProductData = async () => {
    setPageLoader(true)
    const result = await getProductDataById(id);
    if (result) {
      setProductDetails(result.data);
      setPageLoader(false)
    }
  };

  const getSizeData = async () => {
    const result = await getSizesList();
    if (result.data) {
      setSizeList(result.data);
    }
  };

  return (
    productDetail && !pageLoader ? (
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
              <span className="icon-back_page" onClick={()=>navigate(routerPage.SHOP)}></span>
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
              <span>{productDetail.price}$</span>
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
              <span>Color:</span>
              <div className="colorBox" style={{backgroundColor:`${productDetail.color}`}}/>
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
    ): <div style={{minHeight:'100vh'}}>
      <Loader/>
    </div>
  );
};
