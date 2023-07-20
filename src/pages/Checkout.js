import React, { useEffect, useState } from 'react'
import "../styles/checkout.css"
import '../styles/buttons.css'
import Footer from "../components/Footer"
import back from "../images/back.svg"
// import { useSelector } from 'react-redux'
import minus from '../images/minus.png'
import plus from '../images/add.png'
import { useNavigate } from 'react-router-dom'
import mealy from  '../images/logodark.svg'
import { ButtonPill } from '../components/Buttons'

function Checkout() {
  const [isScrolled, setIsScrolled] = useState(false);
 
  // const {items} = useSelector((state) => state.newCart);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/home/deliveryOrder");
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const desiredHeight =450 /* specify the desired height where the position should change */;

      setIsScrolled(scrollHeight > desiredHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const items=['s','s']
  // console.log(items) 
  return (
<div className='checkout-container'>
<nav className='checkout-nav'><img src={mealy} alt='mealy logo'/></nav>
<section className='checkout-content'>
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
     <div className='order-price'>$ 3,000</div>
     
     </div>
  ))}


</div>

<div className={`orders-summary ${isScrolled ? 'scrolled-order' : ''}`}>
  <p className='orders-summary_title'>Summary</p>

  <hr className='order-hr'></hr>
  <div className='order-summary orders-summary_price'><p>Orders</p><p>$ 9000</p></div>
  <div className='order-summary orders-summary_delivery'><p>Delivery</p><p>$ 400</p></div>
  <div className='order-summary orders-summary_services'><p>Services</p><p>$ 50</p></div>
  <div className='order-summary orders-summary_total'><p>TOTAL</p><p>$ 9,450</p></div>
  <ButtonPill text='CONFIRM ORDER' className='order-confirm-btn'/>
</div>
</div>
</section>

<section className='delivery-details-container'> 

</section>
      <Footer/>
    </div>
  )
}

export default Checkout