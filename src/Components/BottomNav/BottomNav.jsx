import React from 'react'
import './BottomNav.css'
import { Link } from 'react-router-dom'

const BottomNav = () => {
  return (
    <>
      <div className='botm-nav'>
        <ul className='nav-btn-container'>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'ast'}>Asteroids</Link></li>
          <li><Link to={'mars'}>Mars</Link></li>
          <li>Solar</li>
        </ul>
      </div>
    </>
  )
}

export default BottomNav