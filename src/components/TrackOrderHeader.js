import React from 'react'
import back from '../images/back-arrow.png'
import chat from '../images/chat-icon.svg'
import '../styles/trackOrder.css'
import { Order } from '../redux/slices/orderSlice'
import { useDispatch, useSelector } from 'react-redux'
export default function TrackOrderHeader() {
  const dispatch=useDispatch()
  const{displayRiderChat}=useSelector((state)=>state.order)

    function closeTrackOrder(){
        dispatch(Order("closeTrackOrder"))
    }
    function openRiderChat(){
      dispatch(Order('displayRiderChat'))
      console.log(displayRiderChat)
    }
  return (
    <div>
        <div className='track-order-heading'>
           
            <img className='track-order-back' src={back}  alt='back-arrow' onClick={closeTrackOrder}/>
            
            <div><h2 className="forgot-password_title auth-title">Track your Order</h2></div>  
            
            <img className='track-order-chat' src={chat} alt="chat icon" onClick={openRiderChat}/>
            
       </div>


      <div className='delivery-time-div'>
      <h3 className='track-time-header'>Estimated Delivery Time</h3>
      <h4 className='track-time' >3:00PM</h4>
      </div>
        
    </div>
  )
}
