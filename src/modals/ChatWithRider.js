import React from 'react'
import ChatWithRiderHeader from '../components/ChatWithRiderHeader'
import ChatWithRiderMessageInput from '../components/ChatWithRiderMessageInput'
import '../styles/chatWithRider.css'
import ReactModal from 'react-modal'
import { useSelector } from 'react-redux'

export default function ChatWithRider() {
  const{displayRiderChat}=useSelector((state)=>state.order)
  return (
    <ReactModal
    isOpen={displayRiderChat}
    overlayClassName="overlay"
    className='chat-with-rider-main-container'>
        <ChatWithRiderHeader/>
        <ChatWithRiderMessageInput/>
    </ReactModal>
  )
}
