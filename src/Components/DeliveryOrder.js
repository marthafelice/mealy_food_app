import React from 'react'
import "../styles/categories.css"
import RestaurantCard from './RestaurantCard'

function DeliveryOrder() {
  return (
    <div className='order-category_delivery order-category'>
      <h3>African Restaurants</h3>
     <RestaurantCard name="Breakfast Hub" rating="4.6" price="400"/>
    </div>
  )
}

export default DeliveryOrder
