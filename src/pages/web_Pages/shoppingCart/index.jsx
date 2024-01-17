import { useEffect, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { routerPage } from "../../../routes";
import { useProductsContext } from "../../../context/products";

export const ShoppingCart = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  let [total, setTotal] = useState(0)

  const { product } = useProductsContext();

  useEffect(() => {
    product.forEach((item)=>{
      setTotalPrice(item.total)
    })
    

  }, [product]);

  const deleteProduct = (data) => {
    setSelectedItem(data);
    product.splice(data, 1);
  };

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
          {product.map((item, index) => {
            return (
              <div className="shoppingProductItem" key={index}>
                <div className="row1">
                  <div
                    className="image"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  ></div>
                  <div className="name">{item.name}</div>
                </div>
                <div className="row2">{item.price} $</div>
                <div className="row3">
                  <div className="quantity">{item.count}</div>
                </div>
                <div className="row4">
                  {(item.total = item.count * item.price)} $
                </div>
                <div className="row5">
                  <span onClick={() => deleteProduct(item._id)}>X</span>
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
              <h6>{totalPrice} $</h6>
            </div>
            <div>
              <h6>Shipping</h6>
              <h6>10 $</h6>
            </div>
            <div>
              <h5>Total</h5>
              <h5>{totalPrice+10} $</h5>
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
