import { Link } from "react-router-dom";
import "./style.scss";
import { routerPage } from "../../routes";

export const ProductList = ({ data }) => {
  return (
    <Link
      to={routerPage.SHOP_DETAILS.replace(":id", data.id)}
      className="productItem"
    >
      <div
        className="productImg"
        style={{ backgroundImage: `url(${data.image})` }}
      ></div>
      <div className="productData">
        <div className="productDataName">{data.name}</div>
        <div className="productDataPrice">
          <h4>{data.price}</h4>
          <h6>{data.price}</h6>
        </div>
        <div className="rate">
          {Array.from({ length: 5 }, (_, index) => {
            return (
              <span
                className={` ${
                  index < data.rate
                    ? "icon-star_icon yellow_star"
                    : "icon-rateStar yellow_star"
                }`}
              ></span>
            );
          })}
        </div>
      </div>
    </Link>
  );
};
