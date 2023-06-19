import React from 'react'
import '../styles/logout.css'
import ReactModal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import { Loggedout } from '../redux/slices/profileSlice'
import logoutImg from "../images/logoutImg.svg"
function Logout() {
  const {displayLogout}=useSelector((state)=>state.profile)
  const dispatch=useDispatch()
  function closeLogout(){
    dispatch(Loggedout('closeLogout'))
  }
  return (
    <ReactModal 
    overlayClassName="overlay overlay_logout" 
    isOpen={displayLogout} 
    className='logout-section'>

   
    <img src={logoutImg}/>
    <p className='logout-confirm'>Oh No! You’re leaving.....<span>
Are you sure?</span></p>
<button className='logout-btn logout-btn_no'>Naah, Just Kidding</button>
<Navlink to="/"><button className='logout-btn logout-btn_yes'>Yes, Log Me Out</button></Navlink>

    </ReactModal>
  )
}

export default Logout