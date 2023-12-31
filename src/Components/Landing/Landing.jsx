import React from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'
import { FaArrowCircleRight } from "react-icons/fa";

const Landing = () => {
  return (
    <>
      <div className='landing-container'>
        <div className='Landing-card'>
          <h1 className='landing-title'>Welcome to <br></br>SPACE CADET!</h1>
          <h2 className='landing-info'>This is your one stop get all for Nasa Information.</h2>
          <h2 className='landing-info'>Enjoy your very own Space Cadet all from the comfort of your fingertips.</h2>
          <h2 className='landing-info'>Lets start our journey through Outer Space!</h2>
          <div className='landing-btn'>
            <h1 className='btn-style'><Link to={'/nasa'}><FaArrowCircleRight /></Link></h1>
          </div>
        </div>
        <div className='circle'></div>
        <div className='circle2'></div>
        <div className='circle3'></div>
        <div className='little-star'></div>
        <div className='little-star2'></div>
        <div className='little-star3'></div>
        <div className='little-star4'></div>
      </div>
    </>
  )
}

export default Landing