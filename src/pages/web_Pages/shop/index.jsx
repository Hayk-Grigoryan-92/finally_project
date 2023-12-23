import "./style.scss";
import {useEffect, useState} from "react";
import {ProductList} from "../../../components/productList";
import {getProductsList} from "../../../platform/api/product-api";
import {getSizesList} from "../../../platform/api/size-api";
import {getColorList} from "../../../platform/api/color-api";

export const Shop = () => {
    const [productList, setProductList] = useState([]);
    const [filteredList, setFilteredList] = useState([])
    const [sizeList, setSizeList] = useState([]);
    const [colorList, setColorList] = useState([]);
    const [filterModel, setFilterModel] = useState({
        selectedColors: [],
        selectedSizes: [],
        maxPrice: 0
    })


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
            setProductList(result.data);
            setFilteredList(result.data)
        }
    };
    console.log(productList)

    useEffect(() => {
        console.log(filterModel)
        const newFilterLis = productList.filter(x =>
            filterModel.selectedColors.includes(x.color)
            || x.size.some(y => filterModel.selectedSizes.includes(y))
            || +x.price <= filterModel.maxPrice)
        // x=>filterModel.selectedColors.includes(x.color) || x.size.some(y=>filterModel.selectedSizes.includes(y))

        // if (filterModel.selectedColors.includes(x.color)) {
        //     return x
        // }

        // x.size.forEach(itemSize => {
        //     if (filterModel.selectedSizes.includes(itemSize)) {
        //         return x
        //     }
        // })

        // if(x.size.some(y=>filterModel.selectedSizes.includes(y))
        // })
        if ((filterModel.selectedSizes.length ||
            filterModel.selectedColors.length ||
            filterModel.maxPrice > 0) || newFilterLis.length
        ) {
            setFilteredList(newFilterLis)
        } else {
            setFilteredList(productList)
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
        setFilterModel({...filterModel, [filterKey]: newList});
    }


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
                                    <input type="checkbox"/>
                                    <label>All Price</label>
                                </div>
                                <span>1000</span>
                            </div>
                            <div className="filterItem">
                                <div>
                                    <input type="checkbox"/>
                                    <label>$0 - $100</label>
                                </div>
                                <span>150</span>
                            </div>
                            <div className="filterItem">
                                <div>
                                    <input type="checkbox"/>
                                    <label>$100 - $200</label>
                                </div>
                                <span>295</span>
                            </div>
                            <div className="filterItem">
                                <div>
                                    <input type="checkbox"/>
                                    <label>$200 - $300</label>
                                </div>
                                <span>246</span>
                            </div>
                            <div className="filterItem">
                                <div>
                                    <input type="checkbox"/>
                                    <label>$300 - $400</label>
                                </div>
                                <span>145</span>
                            </div>
                            <div className="filterItem">
                                <div>
                                    <input type="checkbox"/>
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
                                    <input type="checkbox"/>
                                    <label>All Color</label>
                                </div>
                                <span>1000</span>
                            </div>
                            {colorList.map((item, index) => {
                                return (
                                    <div className="filterItem" key={index}>
                                        <div>

                                            <label>
                                                <div className='G-flex'>
                                                    <input checked={filterModel.selectedColors.includes(item._id)}
                                                           onChange={() => {
                                                               selectColorsAndSize(item._id, 'selectedColors')
                                                           }} type="checkbox"/>
                                                    <p>{item.name}</p>

                                                </div>
                                            </label>
                                        </div>
                                        {/*<span>150</span>*/}
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
                                    <input type="checkbox"/>
                                    <label>All Syze</label>
                                </div>
                                <span>1000</span>
                            </div>
                            {sizeList.map((item, index) => {
                                return (
                                    <div className="filterItem" key={index}>
                                        <div>

                                            <label>
                                                <div className='G-flex'>
                                                    <input type="checkbox"
                                                           checked={filterModel.selectedSizes.includes(item._id)}
                                                           onChange={() => {
                                                               selectColorsAndSize(item._id, 'selectedSizes')
                                                           }}
                                                    />
                                                    <p>  {item.name}</p>
                                                </div>
                                            </label>
                                        </div>
                                        {/*<span>150</span>*/}
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
                        {filteredList.length ?
                            filteredList.map((item, index) => {
                                return (
                                    <ProductList className="productItem" key={index} data={item}/>
                                );
                            })
                            : <div>
                                <p>Empty product list</p>
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};
