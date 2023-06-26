import React from 'react'
import ReactModal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import { Order } from '../redux/slices/orderSlice'
import "../styles/yourOrders.css"
import { NavLink, Outlet } from 'react-router-dom'

function YourOrders() {
    const {displayOrder}=useSelector((state)=>state.order)
    const dispatch=useDispatch()
    function closeOrder(){
        dispatch(Order('closeOrder'))
    }
  return (
    <ReactModal isOpen={displayOrder} overlayClassName="overlay" onRequestClose={closeOrder} className='order-container'>
    <h3 className='order-title'>Your Orders</h3>
    <div className='your-orders_types'>
    <NavLink to="ongoingOrder"><p className='your-orders_type ongoing'>Ongoing</p></NavLink>
    <NavLink to="completedOrder"><p className='your-orders_type completed'>Completed</p></NavLink>
      </div>
      <Outlet/>
    </ReactModal>

  )
}

export default YourOrders