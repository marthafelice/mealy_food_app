import React from 'react'
import ReactModal from 'react-modal'
import { useSelector } from 'react-redux'

import TrackOrderHeader from "../components/TrackOrderHeader";
import YourRider from "../components/YourRider";
import OrderProgress from '../components/OrderProgress.js';
import '../styles/trackOrder.css'
function TrackOrder() {
    const {displayTrackOrder}=useSelector((state)=>state.order)
    
  return (
    <ReactModal isOpen={displayTrackOrder} 
    overlayClassName='overlay_dark'
    className='trackOrder track-order-main-container'
    
    >
    
       <TrackOrderHeader/>
      <YourRider/>
      <OrderProgress/>
  

 

        
    </ReactModal>
  )
}

export default TrackOrder