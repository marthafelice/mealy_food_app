import React from "react";
import "../styles/cartmodal.css";
import CartPageImage from "../images/cart-page-image.png";
import CloseWindowIcon from "../images/close-window.svg";
import { useState } from "react";
import ReactModal from "react-modal";

const CartModal = () => {
  const [count, setCount] = useState(0);
  const [displayCart, setDisplayCart] = useState(false);
  //pls set the open and close functionality from the slices
  function closeCartModal() {
    setDisplayCart(false);
  }
  return (
    <ReactModal
      className="cart-modal"
      overlayClassName="overlay"
      isOpen={displayCart}
      onRequestClose={closeCartModal}
    >
      <div className="cart-modal-content-container">
        <img
          src={CloseWindowIcon}
          alt="close-window-icon"
          className="close-icon_cart"
          onClick={closeCartModal}
        />
        <img src={CartPageImage} alt="breakfast" className="cart-modal-img" />
        <div className="cart-modal-content">
          <h3>Full Breakfast</h3>
          <p className="food-description">
            120g of Yam, potatoes, and plantain, served with sauteed vegetables,
            egg sauce & sausage.
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
      </div>
    </ReactModal>
  );
};

export default CartModal;
