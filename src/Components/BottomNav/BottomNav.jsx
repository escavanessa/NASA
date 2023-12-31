import React from 'react'
import './BottomNav.css'
import { Link } from 'react-router-dom'

const BottomNav = () => {
  return (
    <>
      <div className='botm-nav top'>
        <ul className='nav-btn-container'>
          <li><Link to={'/nasa'}>Nasa</Link></li>
          <li><Link to={'/ast'}>Asteroids</Link></li>
          <li><Link to={'/mars'}>Mars</Link></li>
          <li><Link to={'/solar'}>Solar</Link></li>
        </ul>
      </div>
    </>
  )
}

export default BottomNav