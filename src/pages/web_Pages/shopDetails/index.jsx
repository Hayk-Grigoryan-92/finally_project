import "./style.scss";
import product1 from "../../../assets/images/product-1.jpg";
import product2 from "../../../assets/images/product-2.jpg";
import product3 from "../../../assets/images/product-3.jpg";
import product4 from "../../../assets/images/product-4.jpg";
import { useState } from "react";
import { DetailsDescription } from "./detailsDescription";
import { ProductList } from "../../../components/productList";
import { DetailsInformation } from "./detailsInformation";
import { DetailsReview } from "./detailsReview";
import { useProductsContext } from "../../../context/products";

export const ShopDetails = () => {
 
  const [productDetail] = useState({
    productImg: `${product1}`,
    productName: "Product Name Goes Here",
    productDescription:
      "Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sitclita ea. Sanc ipsum et, labore clita lorem magna duo dolor no seaNonumy",
    rate: 5,
    productPrice: "$123.00",
    id: "s7d15a4d56",
  });

  const [productList] = useState([
    {
      productImg: `${product1}`,
      productTittle: "Product Name Goes Here",
      productNewPrice: "$123.00",
      rate: 5,
      id: "s7d15a4d56",
    },
    {
      productImg: `${product2}`,
      productTittle: "Product Name Goes Here",
      productNewPrice: "$123.00",
      rate: 5,
      id: "s7489a4d56",
    },
    {
      productImg: `${product3}`,
      productTittle: "Product Name Goes Here",
      productNewPrice: "$123.00",
      rate: 4,
      id: "s7d15s8d56",
    },
    {
      productImg: `${product4}`,
      productTittle: "Product Name Goes Here",
      productNewPrice: "$123.00",
      rate: 4,
      id: "s7d15aw8416",
    },
  ]);

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

  return (
    <div className="shopDetails G_container">
      <div className="shopPageLocation">
        <span>Home /</span>
        <span>Shop /</span>
        <span className="exactLocation">Shop Details</span>
      </div>

      <div className="detailsContainer">
        <div
          className="detailsImg"
          style={{ backgroundImage: `url('${productDetail.productImg}')` }}
        ></div>

        <div className="detailsInfo">
          <div className="productName">
            <h3>{productDetail.productName}</h3>
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
            <span>{productDetail.productPrice}</span>
          </div>
          <div className="productDescription">
            <p>{productDetail.productDescription}</p>
          </div>
          <div className="productSizes">
            <span>Sizes:</span>
            <div>
              <label>
                <input type="radio" />
              </label>
              XS
            </div>
            <div>
              <label>
                <input type="radio" />
              </label>
              S
            </div>
            <div>
              <label>
                <input type="radio" />
              </label>
              M
            </div>
            <div>
              <label>
                <input type="radio" />
              </label>
              L
            </div>
            <div>
              <label>
                <input type="radio" />
              </label>
              XL
            </div>
          </div>

          <div className="productColors">
            <span>Colors:</span>
            <div>
              <label>
                <input type="radio" />
              </label>
              Black
            </div>
            <div>
              <label>
                <input type="radio" />
              </label>
              White
            </div>
            <div>
              <label>
                <input type="radio" />
              </label>
              Red
            </div>
            <div>
              <label>
                <input type="radio" />
              </label>
              Blue
            </div>
            <div>
              <label>
                <input type="radio" />
              </label>
              Green
            </div>
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
  );
};
