import React from 'react'
import "../styles/yourOrders.css"


function CompletedOrder() {
  return (
    <section className="completed-order-container">
        <div className='completed-order'>
            <div className='completed-order-details'>
             <p className='order-name'>Full breakast</p>
             <p className='order-timestamp'>
             <span className='date'>27th May</span>,<span className='time'> 02:53pm</span>
             </p>
            </div>
            <p className='re-order'>Re-order</p>
        </div>
        <div className='completed-order'>
            <div className='completed-order-details'>
             <p className='order-name'>French Toast</p>
             <p className='order-timestamp'>
             <span className='date'>27th May</span>,<span className='time'> 02:53pm</span>
             </p>
            </div>
            <p className='re-order'>Re-order</p>
        </div> <div className='completed-order'>
            <div className='completed-order-details'>
             <p className='order-name'>Full Pancakes</p>
             <p className='order-timestamp'>
             <span className='date'>27th May</span>,<span className='time'> 02:53pm</span>
             </p>
            </div>
            <p className='re-order'>Re-order</p>
        </div>
        
    </section>
  )
}

export default CompletedOrder