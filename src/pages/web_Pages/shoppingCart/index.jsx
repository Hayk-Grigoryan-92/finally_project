import { useState } from "react";
import "./style.scss";
import productImg from "../../../assets/images/product-1.jpg";
import { Link } from "react-router-dom";
import { routerPage } from "../../../routes";

export const ShoppingCart = () => {
  const [productCart] = useState([
    {
      image: productImg,
      name: "Product Name",
      price: "$150",
      quantity: "1",
      total: "$150",
    },
    {
      image: productImg,
      name: "Product Name",
      price: "$150",
      quantity: "1",
      total: "$150",
    },
    {
      image: productImg,
      name: "Product Name",
      price: "$150",
      quantity: "1",
      total: "$150",
    },
    {
      image: productImg,
      name: "Product Name",
      price: "$150",
      quantity: "1",
      total: "$150",
    },
    {
      image: productImg,
      name: "Product Name",
      price: "$150",
      quantity: "1",
      total: "$150",
    },
  ]);
  return (
    <div className="shoppingCart G_container">
      <div className="shopPageLocation">
        <span>Home /</span>
        <span>Shop /</span>
        <span className="exactLocation">Shop List</span>
      </div>

      <div className="shoppingCartContainer">
        <div className="shoppingListSection">
          <div className="shoppingListNavbar">
            <div className="nav1">Products</div>
            <div className="nav2">Price</div>
            <div className="nav3">Quantity</div>
            <div className="nav4">Total</div>
            <div className="nav5">Remove</div>
          </div>
          {productCart.map((item, index) => {
            return (
              <div className="shoppingProductItem" key={index}>
                <div className="row1">
                  <div
                    className="image"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  ></div>
                  <div className="name">{item.name}</div>
                </div>
                <div className="row2">{item.price}</div>
                <div className="row3">
                  <div className="minus">-</div>
                  <div className="quantity">{item.quantity}</div>
                  <div className="plus">+</div>
                </div>
                <div className="row4">{item.total}</div>
                <div className="row5">
                  <span>X</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="summarySection">
          <div className="applySection">
            <div>
              <label>
                <input type="text" placeholder="Coupon Code" />
              </label>
            </div>
            <button>Apply Coupon</button>
          </div>
          <h3>CART SUMMARY</h3>
          <div className="totalSummary">
            <div>
              <h6>Subtotal</h6>
              <h6>$150</h6>
            </div>
            <div>
              <h6>Shipping</h6>
              <h6>$10</h6>
            </div>
            <div>
              <h5>Total</h5>
              <h5>$160</h5>
            </div>
            <button>
              <Link to={routerPage.CHECKOUT}>Proceed To Checkout</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
