import "./style.scss";
import { useEffect, useState } from "react";
import { ProductList } from "../../../components/productList";
import { getProductsList } from "../../../platform/api/product-api";
import { getSizesList } from "../../../platform/api/size-api";
import { getColorList } from "../../../platform/api/color-api";
import { Loader } from "../../../components/loader";

export const Shop = () => {
  const [productList, setProductList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [sizeList, setSizeList] = useState([]);
  const [colorList, setColorList] = useState([]);
  const [filterModel, setFilterModel] = useState({
    selectedColors: [],
    selectedSizes: [],
    maxPrice: 0,
  });
  const [pageLoader, setPageLoader] = useState(true);
  const [priceRange, setPriceRange] = useState(0);
  const [maxPrice, setMaxPrice] = useState(null);
  const [minPrice, setMinPrice] = useState(null);

  useEffect(() => {
    getProductstData();
    getSizeData();
    getColorData();
  }, []);

  useEffect(() => {
    if (productList.length) {
      let min = +productList[0].price;
      let max = +productList[0].price;
      productList.forEach((item, index) => {
        if (+item.price > max) {
          max = +item.price;
        }
        if (+item.price < min) {
          min = +item.price;
        }
      });

      setMaxPrice(max);
      setMinPrice(min);
    }
  }, [productList]);

  const handleChange = (e) => {
    setPriceRange(e.target.value)
}

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
    setPageLoader(true);
    const result = await getProductsList();
    if (result.data) {
      setProductList(result.data);
      setFilteredList(result.data);
      setPageLoader(false);
    }
  };
  console.log(productList);

  useEffect(() => {
    console.log(filterModel);
    const newFilterLis = productList.filter(
      (x) =>
        filterModel.selectedColors.includes(x.color) ||
        x.size.some((y) => filterModel.selectedSizes.includes(y)) ||
        +x.price <= filterModel.maxPrice
    );
    if (
      filterModel.selectedSizes.length ||
      filterModel.selectedColors.length ||
      filterModel.maxPrice > 0 ||
      newFilterLis.length
    ) {
      setFilteredList(newFilterLis);
    } else {
      setFilteredList(productList);
    }
  }, [filterModel]);

  const selectColorsAndSize = (id, filterKey) => {
    let index = filterModel[filterKey].indexOf(id);
    let newList = filterModel[filterKey];
    if (index >= 0) {
      newList.splice(index, 1);
    } else {
      newList.push(id);
    }
    setFilterModel({ ...filterModel, [filterKey]: newList });
  };

  return productList.length && !pageLoader ? (
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
            <div className="priceList">
              <p className="rangePrice">
                Range By {minPrice}-{priceRange}
              </p>
              <div className="price">
                <input
                  type="range"
                  onChange={handleChange}
                  value={priceRange}
                />
              </div>
              <div className="rangePrices">
                <p>{minPrice}</p>
                <p>{maxPrice}</p>
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
              {colorList.map((item, index) => {
                return (
                  <div className="filterItem" key={index}>
                    <div>
                      <label>
                        <div className="G-flex">
                          <input
                            checked={filterModel.selectedColors.includes(
                              item._id
                            )}
                            onChange={() => {
                              selectColorsAndSize(item._id, "selectedColors");
                            }}
                            type="checkbox"
                          />
                          <p>{item.name}</p>
                        </div>
                      </label>
                    </div>
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
              {sizeList.map((item, index) => {
                return (
                  <div className="filterItem" key={index}>
                    <div>
                      <label>
                        <div className="G-flex">
                          <input
                            type="checkbox"
                            checked={filterModel.selectedSizes.includes(
                              item._id
                            )}
                            onChange={() => {
                              selectColorsAndSize(item._id, "selectedSizes");
                            }}
                          />
                          <p> {item.name}</p>
                        </div>
                      </label>
                    </div>
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
            {filteredList.length ? (
              filteredList.map((item, index) => {
                return (
                  <ProductList
                    className="productItem"
                    key={index}
                    data={item}
                  />
                );
              })
            ) : (
              <div>
                <p>Empty product list</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div style={{ minHeight: "100vh" }}>
      <Loader />
    </div>
  );
};
