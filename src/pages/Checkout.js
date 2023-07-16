import React from 'react'
import "../styles/checkout.css"
import Footer from "../components/Footer"
import back from "../images/back.svg"
// import { useSelector } from 'react-redux'
import minus from '../images/minus.png'
import plus from '../images/add.png'
import { useNavigate } from 'react-router-dom'

function Checkout() {
 
  // const {items} = useSelector((state) => state.newCart);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/home/deliveryOrder");
  };

  const items=['s','s']
  // console.log(items) 
  return (
    <div className='checkout-container'>
<nav className='checkout-nav'></nav>
<div className='checkout-content'>
<div className='back-container'>< img src={back} onClick={handleGoBack} className='back' alt='go back'/><p>Order Summary</p></div>
<h3 className='order-restaurant-name'>Breakfast Hub</h3>
<div className='orders-details-container'>
<div className='orders-details'>
  <p className='order-count'>{items.length} Orders from <b>breakfast hub</b></p>
  {items.map((item)=>(
     <div key={item.id} className='order-lists'>
     {/* <p className='order'>{item.type}</p> */}
     <div className='order-detail'>
      <div className='item-update'><img src={minus} alt='minus symbol' className='add-icon'/><p className='num'>1</p><img src={plus}  className='subtract-icon' alt='addition symbol'/></div>
      <div className='food-description'>
        <p className='order-food-title'>Full Breakfast</p>
        <p className='food-description-text'>Croissants and a cup of coffee served with sauteed vegetables..</p>                             
      </div>
     </div>
     <p className='order-price'>$ 3,000</p>
     
     </div>
  ))}


</div>
<div className='orders-summary'>SUMMARY</div>
</div>
</div>
      <Footer/>
    </div>
  )
}

export default Checkout