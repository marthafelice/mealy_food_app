import React from "react";
import { useDispatch, useSelector } from "react-redux";
import add from "../../images/add.png";
import minus from "../../images/minus.png";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../redux/slices/cartSlice";
import { NavLink, useParams } from "react-router-dom";

const Cart = () => {
  const {id}=useParams()
  const dispatch = useDispatch();
  const {cartItems} = useSelector((state) => state.cart);
  const ok=[]

  console.log(cartItems)
  console.log(cartItems.length)
  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncrementQuantity = (itemId) => {
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrementQuantity = (itemId) => {
    dispatch(decrementQuantity(itemId));
  };
  return (
      <div className='cart-wrapper'>
        <h1>Your Cart</h1>


        {cartItems.length === 0 ? (
          <p>Nothing added yet</p>
        ) : (
          <div>
            {cartItems.map((cartItem) => (
            
                <div className='cart-row' key={cartItem.id}>
            
                  <img src={cartItem.img} alt='cartimage' />
                  <div className='cart-desc'>
                    <h5>{cartItem.type}</h5>
                    <p>${cartItem.price}</p>
                  </div>
                  <div className='counter'>
                    <img
                      src={minus}
                      alt=''
                      onClick={() => handleDecrementQuantity(cartItem.id)}
                    />
                    <span> {cartItem.quantity} </span>
                    <img
                      src={add}
                      alt=''
                      onClick={() => handleIncrementQuantity(cartItem.id)}
                    />
                  </div>
                  <button onClick={() => handleRemoveFromCart(cartItem.id)} className="remove">
                    Remove
                  </button>
                </div>
            ))}
            <NavLink to="checkout"><button>Checkout</button></NavLink>
          </div>
        )}
      </div>
  );
};

export default Cart;
