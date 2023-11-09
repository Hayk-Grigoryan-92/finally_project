import "./style.scss";

export const Checkout = () => {
  return (
    <div className="checkout G_container">
      <div className="shopPageLocation">
        <span>Home /</span>
        <span>Shop /</span>
        <span className="exactLocation">Shop List</span>
      </div>

      <div className="checkoutContent">
        <div className="billingAddressSection">
          <h2 className="billingTittle">BILLING ADDRESS</h2>
          <div className="billingForm">
            <div className="billingInput">
              <label>
                First Name
                <input type="text" placeholder="John" />
              </label>
            </div>
            <div className="billingInput">
              <label>
                Last Name
                <input type="text" placeholder="Doe" />
              </label>
            </div>
            <div className="billingInput">
              <label>
                E-mail
                <input type="text" placeholder="example@email.com" />
              </label>
            </div>
            <div className="billingInput">
              <label>
                Mobile No
                <input type="text" placeholder="+123 456 789" />
              </label>
            </div>
            <div className="billingInput">
              <label>
                Address Line 1
                <input type="text" placeholder="123 Street" />
              </label>
            </div>
            <div className="billingInput">
              <label>
                Address Line 2
                <input type="text" placeholder="123 Street" />
              </label>
            </div>
            <div className="billingInput">
              <label>
                Country
                <select type="text" placeholder="123 Street">
                  <option selected>United States</option>
                  <option>Armenia</option>
                  <option>Albania</option>
                  <option>Algeria</option>
                </select>
              </label>
            </div>
            <div className="billingInput">
              <label>
                City
                <input type="text" placeholder="New York" />
              </label>
            </div>
            <div className="billingInput">
              <label>
                State
                <input type="text" placeholder="New York" />
              </label>
            </div>
            <div className="billingInput">
              <label>
                ZIP Code
                <input type="text" placeholder="123" />
              </label>
            </div>
            <div className="customCheckbox">
              <div>
                <input type="checkbox" />
                <label>Create an account</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Ship to different address</label>
              </div>
            </div>
          </div>
        </div>

        <div className="orderSection">
          <div className="orderTotal">
            <h2 className="orderTittle">ORDER TOTAL</h2>
            <div className="orderList">
              <h6>Products</h6>
              <div className="orderItem">
                <span>Product Name 1</span>
                <span>$150</span>
              </div>
              <div className="orderItem">
                <span>Product Name 2</span>
                <span>$150</span>
              </div>
              <div className="orderItem">
                <span>Product Name 3</span>
                <span>$150</span>
              </div>
              <div className="orderItem">
                <span className="orderSubTotal">Subtotal</span>
                <span className="orderSubTotal">$150</span>
              </div>
              <div className="orderItem">
                <span className="orderSubTotal">Shipping</span>
                <span className="orderSubTotal">$10</span>
              </div>
              <div className="orderItem">
                <span className="orderSubTotalPrice">Total</span>
                <span className="orderSubTotalPrice">$160</span>
              </div>
            </div>
          </div>
          <div className="paymentSection">
            <h2>PAYMENT</h2>
            <div className="paymentList">
              <div className="">
                <input type="radio" />
                <label>Paypal</label>
              </div>
              <div>
                <input type="radio" />
                <label>Direct Check</label>
              </div>
              <div>
                <input type="radio" />
                <label>Bank Transfer</label>
              </div>
              <button>Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
