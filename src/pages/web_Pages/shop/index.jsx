import "./style.scss";
import { useState } from "react";
import product1 from "../../../assets/images/product-1.jpg";
import product2 from "../../../assets/images/product-2.jpg";
import product3 from "../../../assets/images/product-3.jpg";
import product4 from "../../../assets/images/product-4.jpg";
import product5 from "../../../assets/images/product-5.jpg";
import product6 from "../../../assets/images/product-6.jpg";
import product7 from "../../../assets/images/product-7.jpg";
import product8 from "../../../assets/images/product-8.jpg";
import product9 from "../../../assets/images/product-9.jpg";
import { ProductList } from "../../../components/productList";

export const Shop = () => {
  const [productList, setProductList] = useState([
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
    {
      productImg: `${product5}`,
      productTittle: "Product Name Goes Here",
      productNewPrice: "$123.00",
      rate: 5,
      id: "s7d15a8f9g6",
    },
    {
      productImg: `${product6}`,
      productTittle: "Product Name Goes Here",
      productNewPrice: "$123.00",
      rate: 3,
      id: "s7d151sbg56",
    },
    {
      productImg: `${product7}`,
      productTittle: "Product Name Goes Here",
      productNewPrice: "$123.00",
      rate: 4,
      id: "s7d15ah6892",
    },
    {
      productImg: `${product8}`,
      productTittle: "Product Name Goes Here",
      productNewPrice: "$123.00",
      rate: 5,
      id: "s7d15a36d16",
    },
    {
      productImg: `${product9}`,
      productTittle: "Product Name Goes Here",
      productNewPrice: "$123.00",
      rate: 5,
      id: "s7d15a3jh852",
    },
  ]);

  return (
    <div className="shopPage G_container">
      <div className="shopPageLocation">
        <span>Home /</span>
        <span>Shop /</span>
        <span className="exactLocation">Shop List</span>
      </div>

      <div className="shopSection">
        <div className="leftSideSection">
          <div className="filterSection">
            <div className="filterTittle">
              <div className="filterText">
                <span className="textFill">Filter by price</span>
                <span className="dashed">--------------------</span>
              </div>
            </div>
            <div className="filterList">
              <div className="filterItem">
                <div>
                  <input type="checkbox" />
                  <label>All Price</label>
                </div>
                <span>1000</span>
              </div>
              <div className="filterItem">
                <div>
                  <input type="checkbox" />
                  <label>$0 - $100</label>
                </div>
                <span>150</span>
              </div>
              <div className="filterItem">
                <div>
                  <input type="checkbox" />
                  <label>$100 - $200</label>
                </div>
                <span>295</span>
              </div>
              <div className="filterItem">
                <div>
                  <input type="checkbox" />
                  <label>$200 - $300</label>
                </div>
                <span>246</span>
              </div>
              <div className="filterItem">
                <div>
                  <input type="checkbox" />
                  <label>$300 - $400</label>
                </div>
                <span>145</span>
              </div>
              <div className="filterItem">
                <div>
                  <input type="checkbox" />
                  <label>$400 - $500</label>
                </div>
                <span>168</span>
              </div>
            </div>
          </div>
          <div className="filterSection">
            <div className="filterTittle">
              <div className="filterText">
                <span className="textFill">Filter by color</span>
                <span className="dashed">--------------------</span>
              </div>
            </div>
            <div className="filterList">
              <div className="filterItem">
                <div>
                  <input type="checkbox" />
                  <label>All Color</label>
                </div>
                <span>1000</span>
              </div>
              <div className="filterItem">
                <div>
                  <input type="checkbox" />
                  <label>Black</label>
                </div>
                <span>150</span>
              </div>
              <div className="filterItem">
                <div>
                  <input type="checkbox" />
                  <label>White</label>
                </div>
                <span>295</span>
              </div>
              <div className="filterItem">
                <div>
                  <input type="checkbox" />
                  <label>Red</label>
                </div>
                <span>246</span>
              </div>
              <div className="filterItem">
                <div>
                  <input type="checkbox" />
                  <label>Blue</label>
                </div>
                <span>145</span>
              </div>
              <div className="filterItem">
                <div>
                  <input type="checkbox" />
                  <label>Green</label>
                </div>
                <span>168</span>
              </div>
            </div>
          </div>
          <div className="filterSection">
            <div className="filterTittle">
              <div className="filterText">
                <span className="textFill">Filter by size</span>
                <span className="dashed">--------------------</span>
              </div>
            </div>
            <div className="filterList">
              <div className="filterItem">
                <div>
                  <input type="checkbox" />
                  <label>All Syze</label>
                </div>
                <span>1000</span>
              </div>
              <div className="filterItem">
                <div>
                  <input type="checkbox" />
                  <label>XS</label>
                </div>
                <span>150</span>
              </div>
              <div className="filterItem">
                <div>
                  <input type="checkbox" />
                  <label>S</label>
                </div>
                <span>295</span>
              </div>
              <div className="filterItem">
                <div>
                  <input type="checkbox" />
                  <label>M</label>
                </div>
                <span>246</span>
              </div>
              <div className="filterItem">
                <div>
                  <input type="checkbox" />
                  <label>L</label>
                </div>
                <span>145</span>
              </div>
              <div className="filterItem">
                <div>
                  <input type="checkbox" />
                  <label>XL</label>
                </div>
                <span>168</span>
              </div>
            </div>
          </div>
        </div>

        <div className="productSection">
          <div className="filterBar">
            <div className="filterNavbar">
              <div className="filterIcon">
                <button>
                  <span className="icon-grid_view"></span>
                </button>
                <button>
                  <span className="icon-menu_FILL"></span>
                </button>
              </div>
              <div className="filterButton">
                <button>Sorting</button>
                <button>Shoping</button>
              </div>
            </div>
          </div>

          <div className="productList">
            {productList.map((item, index) => {
              return (
                <ProductList className="productItem" key={index} data={item} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
