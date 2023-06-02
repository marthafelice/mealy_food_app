import React from "react";
import { useSelector } from "react-redux";
import toast from "../../images/toast.png"
import rice from "../../images/rice.png"
import add from "../../images/add.png"
import minus from "../../images/minus.png"

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.menu);

  return (
    <div>
      {/* {cartItems?.length === 0 ? (
        <div><h1>Your Cart</h1><div><img src="" alt="" /><div><h5>French Toast</h5><p>$ 3,000</p></div><div><img src="" alt="" /><span> 1 </span><img src="" alt="" /></div></div> Your cart is empty.</div>
      ) : (
        <ul>
          {cartItems?.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )} */}
      <div>
        <h1>Your Cart</h1>
        <div className="cart-row">
          <img src={toast} alt='' />
          <div className="cart-desc">
            <h5>French Toast</h5>
            <p>$ 3,000</p>
          </div>
          <div className="counter">
            <img src={minus} alt='' />
            <span> 1 </span>
            <img src={add} alt='' />
          </div>
        </div>{" "}
        Your cart is empty.
      </div>
    </div>
  );
};

export default Cart;
