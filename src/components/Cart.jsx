import React from 'react'
import "../styles/cart.css";
import CartPageImage from "../images/cart-page-image.png"


const Cart = () => {
  return (
      <React.Fragment>
          <div className='cart-container'>
        <img src={CartPageImage} alt="breakfast" />
         <h1>full breakfast</h1>
        <p className='sent-email'>120g of Yam, potatoes, and plantain, served <br></br> with sauteed vegetables, egg sauce & sausage.</p>
      <p className='price'>$ 3,000</p>
      <div className='order-qty-add-to-cart'>
        <div className='increase-decrease-order-quantity'>
          <p>-</p>
          <p>1</p>
          <p>+</p>
        </div>
        <button className='add-to-cart'>add to cart</button>
        </div>
        </div>
   </React.Fragment>
  )
}

export default Cart
