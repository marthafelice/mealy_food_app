import React from 'react'
import ReactModal from 'react-modal'
import { useSelector } from 'react-redux'

function TrackOrder() {
    const {displayTrackOrder}=useSelector((state)=>state.order)
    
    function closeTrackOrder(){
        dis
    }
  return (
    <ReactModal isOpen={displayTrackOrder} overlayClassName='overlay'
    onRequestClose={closeTrackOrder}
    >
        
        TrackOrder

        
    </ReactModal>
  )
}

export default TrackOrder