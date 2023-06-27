import React from "react";
import "../styles/cartmodal.css";
import CartPageImage from "../images/cart-page-image.png";
import CloseWindowIcon from "../images/close-window.svg";
import { useSelector, useDispatch } from "react-redux";
import ReactModal from "react-modal";
import { incrementQuantity, decrementQuantity } from "../redux/slices/cartSlice";

const CartModal = ({ isCartModalOpen }) => {
  const count = useSelector((state) => {
    // Access the quantity value from the Redux store based on your data structure
    // Return the quantity for the specific item you want to display
    return state.cart.quantity;
  });

  const dispatch = useDispatch();

  function closeCartModal() {
    // Dispatch an action to close the cart modal
  }

  const handleDecrease = () => {
    // Dispatch an action to decrease the quantity
    dispatch(decrementQuantity());
  };

  const handleIncrease = () => {
    // Dispatch an action to increase the quantity
    dispatch(incrementQuantity());
  };

  return (
    <>
      <ReactModal
        isOpen={isCartModalOpen}
        onRequestClose={closeCartModal}
        overlayClassName="overlay-cart"
        className="cart-modal"
      >
        <div className="cart-window cart-modal-content-container">
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
              120g of Yam, potatoes, and plantain, served with sauteed
              vegetables, egg sauce & sausage.
            </p>
            <p className="price">$ 3,000</p>
            <div className="order-quantity-add-to-cart-container">
              <div className="order-quantity-container">
                <button className="btn decrease-order" onClick={handleDecrease}>
                  -
                </button>
                <p className="quantity">{count}</p>
                <button className="btn increase-order" onClick={handleIncrease}>
                  +
                </button>
              </div>
              <button className="add-to-cart">add to cart</button>
            </div>
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default CartModal;
