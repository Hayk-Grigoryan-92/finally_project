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
        style={{ backgroundImage: `url(${data.productImg})` }}
      ></div>
      <div className="productData">
        <div>{data.productTittle}</div>
        <div className="productDataPrice">
          <h5>{data.productNewPrice}</h5>
          <h6>{data.productNewPrice}</h6>
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
