import React from 'react'
import ChatWithRiderHeader from '../components/ChatWithRiderHeader'
import ChatWithRiderMessageInput from '../components/ChatWithRiderMessageInput'
import '../styles/chatWithRider.css'

export default function ChatWithRider() {
  return (
    <div className='chat-with-rider-main-container'>
        <ChatWithRiderHeader/>
        <ChatWithRiderMessageInput/>
    </div>
  )
}
