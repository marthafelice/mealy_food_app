import React, { useState } from 'react'
import ReactModal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import { Order } from '../redux/slices/orderSlice'
import "../styles/yourOrders.css"

import OngoingOrder from './OngoingOrder'
import CompletedOrder from './CompletedOrder'

function YourOrders() {
    const [active,setActive]=useState("ongoing")
    const {displayOrder}=useSelector((state)=>state.order)
    const dispatch=useDispatch()
    function closeOrder(){
        dispatch(Order('closeOrder'))
    }
    function ongoing(){
      setActive("ongoing")
    }
    function completed(){
      setActive('completed')
    }
  return (
    <ReactModal isOpen={displayOrder} overlayClassName="overlay" onRequestClose={closeOrder} className='order-container'>
    <h3 className='order-title'>Your Orders</h3>
    <div className='your-orders_types'>
    <p className={`your-orders_type ${active === "ongoing" ? "active-order" : ""}`} onClick={ongoing}>Ongoing</p>
    <p className={`your-orders_type ${active === "completed" ? "active-order" : ""}`} onClick={completed}>Completed</p>
     </div>
      <div className='orders-container'>
      {active==="ongoing"?<OngoingOrder/>:<CompletedOrder/>}
      </div>
    </ReactModal>

  )
}

export default YourOrders