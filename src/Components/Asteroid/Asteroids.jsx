import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import './Asteroid.css'











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
      <div className='Photo-Wrapper'>
        <div className='Card'>
          <Swiper
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
                        <h1 className='title'>Name</h1>
                        {asteroid.name}
                      </div>
                      <div className='asteroid-size'>
                        <h1 className='title'>Asteroid Size: </h1>
                        <span>{asteroid.estimated_diameter.kilometers.estimated_diameter_max}</span>
                      </div>
                      <div className='asteroid-approach'>
                        <h1 className='title'>Approach</h1>
                        <h1 className='margin'>Date: <span>{asteroid.close_approach_data[0].close_approach_date_full}</span></h1>
                        <h1 className='margin'>Orbiting Body:  <span>{asteroid.close_approach_data[0].orbiting_body}</span></h1>
                        <h1 className='margin'>Miss Distance: <span>{asteroid.close_approach_data[0].miss_distance.kilometers} km/h </span></h1>
                      </div>
                      <div className='asteroid-velocity'>
                        <h1  className='title'>Velocity</h1>
                        <h1>{asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour} km/h</h1>
                      </div>
                      <div className='asteroid-id'>
                        <h1 className='title'>ID</h1>
                        {asteroid.neo_reference_id}
                      </div>
                    </div>

                  </SwiperSlide>
                )
              })
            }
            ...
          </Swiper>
        </div>
      </div>
      <div className='Info-Wrapper'>
        <div className='Info'>
          <select onChange={handleChange}>
            {
              Object.keys(data.near_earth_objects || {}).map((fecha, index) => {
                return (
                  <option key={index}>{fecha}</option>
                )
              })
            }
          </select>
        </div>
      </div>
    </>
  )
}
