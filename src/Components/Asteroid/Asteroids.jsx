import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import './Asteroid.css'
import BottomNav from '../BottomNav/BottomNav';
import TopLogo from '../TopLogo/TopLogo';












let myDate = new Date();
let year = myDate.getFullYear();
let month = myDate.getMonth() + 1;
let day = myDate.getDate();
let todaysDate = `${year}-${month}-${day}`;

//make a string out of this date. 
var futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 5);
let futureYear = futureDate.getFullYear();
let futureMonth = futureDate.getMonth() + 1;
let futureDay = futureDate.getDate();
let future = `${futureYear}-${futureMonth}-${futureDay}`;
console.log(futureDate)




const baseUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${todaysDate}&end_date=${future}&api_key=K94Zcfj55KWoHu8AB1rj6Q4hdcFjsgAfyfo97Zjs`


function fetchData() {
  const dataPromise = new Promise((resolve, reject) => {
    try {
      fetch(baseUrl)
        .then(response => response.json())
        .then(json => {
          resolve(json)
          console.log(json)
        })
    } catch (error) {
      reject(error)
      console.log(error)
    }
  })
  return dataPromise
}



export const Asteroids = () => {
  const [data, setData] = useState({})
  const [select, setSelect] = useState('')

  useEffect(() => {
    fetchData().then((response) => {
      console.log(response)
      setData(response)
      setSelect(Object.keys(response.near_earth_objects)[0])

    }).catch(
      (error) => { console.log(error) }
    )

  }, []);


  function handleChange(e) {
    console.log(e)
    setSelect(e.target.value)
  }



  return (
    <>
      <TopLogo />
      <Swiper className='asteroid-card'
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          data.near_earth_objects && data.near_earth_objects[select] && data.near_earth_objects[select].map((asteroid) => {
            return (

              <SwiperSlide>
                <div className='asteroid-container'>
                  <div className='asteroid-name'>
                    <h1 className='title'>Name: {asteroid.name}</h1>
                  </div>
                  <div className='asteroid-size'>
                    <h1 className='title'>Asteroid Size: </h1>
                    <span className='size'>{asteroid.estimated_diameter.kilometers.estimated_diameter_max}<h2>diameter in kilometers</h2></span>
                  </div>
                  <div className='asteroid-approach'>
                    <h1 className='title'>Approach</h1>
                    <h2 className='margin'>Date: <span>{asteroid.close_approach_data[0].close_approach_date_full}</span></h2>
                    <h2 className='margin'>Orbiting Body:  <span>{asteroid.close_approach_data[0].orbiting_body}</span></h2>
                    <h2 className='margin'>Miss Distance: <span>{asteroid.close_approach_data[0].miss_distance.kilometers} kilometers </span></h2>
                  </div>
                  <div className='asteroid-velocity'>
                    <h1 className='title'>Velocity</h1>
                    <h2>{asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour} km/h</h2>
                  </div>
                  <div className='asteroid-id'>
                    <h1 className='id-title'>ID</h1>
                    <span className='id'>{asteroid.neo_reference_id}</span>
                  </div>
                </div>

              </SwiperSlide>
            )
          })
        }
        <div className='ast-circle'></div>
        <div className='ast-circle1'></div>
        <div className='ast-circle2'></div>
        <div className='ast-star'></div>
        <div className='ast-star1'></div>
      </Swiper>
      <div className='Info-Wrapper'>
        <div className='asteroid-Info'>

          <select onChange={handleChange}>
            {
              Object.keys(data.near_earth_objects || {}).map((fecha, index) => {
                return (
                  <option key={index}>{fecha}</option>
                )
              })
            }
          </select>
          <h2>Select a date and view all the Asteroids that are passing by and waving at Earth!</h2>
        </div>
      </div>
      <div className='ast-line'></div>
      <div className='ast-line2'></div>
      <div className='ast-line3'></div>
      <div className='ast-star3'></div>
      <BottomNav />
    </>
  )
}
