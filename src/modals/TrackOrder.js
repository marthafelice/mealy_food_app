import React from 'react'
import ReactModal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import "../styles/yourOrders.css"
import { Order } from '../redux/slices/orderSlice'

function TrackOrder() {
    const {displayTrackOrder}=useSelector((state)=>state.order)
    const dispatch=useDispatch()
    function closeTrackOrder(){
        dispatch(Order('closeTrackOrder'))
    }
  return (
    <ReactModal isOpen={displayTrackOrder} 
    overlayClassName='overlay_dark'
    className='trackOrder'
    
    >
        <div className='track-order-container'>

        TrackOrder
        </div>
 

        
    </ReactModal>
  )
}

export default TrackOrder