import React from "react";
import "../styles/cart.css";
import CartPageImage from "../images/cart-page-image.png";
import CloseWindowIcon from "../images/close-window.svg";
import { useState } from "react";

const Cart = () => {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <div className="cart-container">
        <img src={CloseWindowIcon} alt="close-window-icon" className="close-window-icon"/>
        <img src={CartPageImage} alt="breakfast" className="cart-page-image" />
        <h1>full breakfast</h1>
        <p className="food-description">
          120g of Yam, potatoes, and plantain, served <br></br> with sauteed
          vegetables, egg sauce & sausage.
        </p>
        <p className="price">$ 3,000</p>
        <div className="order-quantity-add-to-cart-container">
          <div className="order-quantity-container">
            <button
              className="btn decrease-order"
              onClick={() => setCount(count - 1)}
            >
              -
            </button>
            <p className="quantity">{count}</p>
            <button
              className="btn increase-order"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
          </div>
          <button className="add-to-cart">add to cart</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cart;
