import "./style.scss";
import { useEffect, useState } from "react";
import { ProductList } from "../../../components/productList";
import { getProductsList } from "../../../platform/api/product-api";
import { getSizesList } from "../../../platform/api/size-api";
import { getColorList } from "../../../platform/api/color-api";

export const Shop = () => {
  const [productList, setProductList] = useState([]);
  const [sizeList, setSizeList] = useState([]);
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    getProductstData();
    getSizeData();
    getColorData();
  }, []);

  const getSizeData = async () => {
    const result = await getSizesList();
    if (result.data) {
      setSizeList(result.data);
    }
  };

  const getColorData = async () => {
    const result = await getColorList();
    if (result.data) {
      setColorList(result.data);
    }
  };

  const getProductstData = async () => {
    const result = await getProductsList();
    if (result.data) {
      console.log(result.data);
      setProductList(result.data);
      console.log(productList);
    }
  };

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
              {colorList.map((item, index) => {
                return (
                  <div className="filterItem" key={index}>
                    <div>
                      <input type="checkbox" />
                      <label>{item.name}</label>
                    </div>
                    <span>150</span>
                  </div>
                );
              })}
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
              {colorList.map((item, index) => {
                return (
                  <div className="filterItem" key={index}>
                    <div>
                      <input type="checkbox" />
                      <label>{item.name}</label>
                    </div>
                    <span>150</span>
                  </div>
                );
              })}
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
