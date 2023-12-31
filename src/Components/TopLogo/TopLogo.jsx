import React from 'react'
import './TopLogo.css'
import { BsStars } from "react-icons/bs";

const TopLogo = () => {
  return (
    <>
    <div className='logo-container'>
        <div className='Logo-wrapper'>
            <h1 className='logo-title'>Space Cadet</h1>
            <h1 className='stars'><BsStars /></h1>
        </div>
    </div>
    </>
  )
}

export default TopLogo