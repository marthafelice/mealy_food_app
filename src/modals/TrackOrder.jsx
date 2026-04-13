import React from 'react'
import ReactModal from 'react-modal'
import { useSelector } from 'react-redux'

import TrackOrderHeader from "../components/TrackOrderHeader.jsx";
import YourRider from "../components/YourRider.jsx";
import OrderProgress from '../components/OrderProgress.jsx';
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