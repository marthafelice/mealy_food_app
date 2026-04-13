import React from 'react'
import back from '../images/back.svg'
import call from '../images/call-icon.png'
import rider from '../images/rider.png'
import { useDispatch } from 'react-redux'
import { Order } from '../redux/slices/orderSlice'
export default function ChatWithRiderHeader() {
  const dispatch=useDispatch();
  function closeRiderChat(){
    dispatch(Order('closeRiderChat'))
  }
  return (
    <div className='chat-with-rider-header-container'>
     <div className='arrow-driver-container'>
      <img  className='chat-with-rider-back' src={back}  alt='back-arrow' onClick={closeRiderChat}/>   

      <div className='rider-header-image-and-name'>
            <div className='chat-with-rider-image'>
                <img src={rider} alt='rider'/>
            </div>
                <h4 className='your-rider-name'>Micheal Stone</h4>
            
      </div>
    </div>
  
      <img className='chat-with-rider-call' src={call}  alt='call-icon'/> 
      

    </div>
  )
}
