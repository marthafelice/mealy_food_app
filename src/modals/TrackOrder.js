import React from 'react'
import ReactModal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'

import { Order } from '../redux/slices/orderSlice'
import React from 'react'
import TrackOrderHeader from "./TrackOrderHeader";
import YourRider from "./YourRider";
import OrderProgress from '../components/OrderProgress.js';
import '../styles/trackOrder.css'
function TrackOrder() {
    const {displayTrackOrder}=useSelector((state)=>state.order)
    
  return (
    <ReactModal isOpen={displayTrackOrder} 
    overlayClassName='overlay_dark'
    className='trackOrder'
    
    >
    
    <div  className='track-order-main-container'>
      <TrackOrderHeader/>
      <YourRider/>
      <OrderProgress/>
    </div>

 

        
    </ReactModal>
  )
}

export default TrackOrder