import React from 'react'
import "../styles/yourOrders.css"
function OngoingOrder() {
  return (
    <div className='ongoing-order-container'>
      <div className='ongoing-orders'>
        <div className='ongoing-order'>
          <p className='order-name'>Full breakast</p>
          <p className='order-timestamp'>
           <span className='date'> 27th May</span>,<span className='time'> 02:53pm</span>
          </p>
        </div>
        <div className='ongoing-order'>
        <p className='order-name'>French Toast</p>
        <p className='order-timestamp'>
           <span className='date'> 27th May</span>,<span className='time'> 02:53pm</span>
          </p>
        </div>
       
        <p className='track-order'>Track Order</p>

      </div>

     <div className='ongoing-orders'>
        <div className='ongoing-order'>
          <p className='order-name'>Full Pancakes</p>
          <p className='order-timestamp'>
           <span className='date'> 27th May</span>,<span className='time'> 02:53pm</span>
          </p>
        </div>
       
       
        <p className='track-order'>Track Order</p>

      </div>
    </div>
  )
}

export default OngoingOrder