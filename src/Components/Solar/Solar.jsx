import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './Solar.css'
import BottomNav from '../BottomNav/BottomNav';
import { Swiper, SwiperSlide } from 'swiper/react';
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




const baseUrl = "https://api.nasa.gov/DONKI/FLR?startDate=2023-11-30&endDate=2023-12-03&api_key=K94Zcfj55KWoHu8AB1rj6Q4hdcFjsgAfyfo97Zjs"


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





const Solar = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    fetchData().then((response) => {
      setData(response)
      console.log(response)
    }).catch(
      (error) => { console.log(error) }
    )

  }, []);





  return (
    <>
      <TopLogo />
      <div className='solar-wrapper'>
        <Swiper className='solar-swiper'
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {
            Object.keys(data || {}).map((info, index) => {
              return (
                <>
                  <SwiperSlide className='solar-info' key={index}>
                    <div className='solar-card'>
                      <h1 className='solar-title'>Solar Flare Information</h1>
                      <h1 className='solar-h1'>Active Region Number: {info.activeRegionNum}</h1>
                      <h1 className='solar-h1'>Class Type: {info.classType}</h1>
                      <h1 className='solar-h1'>Begin Time: {info.beginTime}</h1>
                      <h1 className='solar-h1'>End Time: {info.endTime}</h1>
                      <h1 className='solar-h1'>Flare ID: {info.flrID}</h1>
                      <h1 className='solar-h1'>Peak Time: {info.peakTime}</h1>
                    </div>
                  </SwiperSlide>
                </>
              )
            })
          }
        </Swiper>
        <div className='solar-circle'></div>
        <div className='solar-circle1'></div>
        <div className='solar-circle2'></div>
        <div className='solar-star'></div>
      </div>
      <div className='more-info'>
        <div className='more-info-card'>
          <h1 className='more-info-title'>Information</h1>
          <h2>A solar flare is an intense localized eruption of electromagnetic radiation in the Sun's atmosphere. Flares occur in active regions and are often, but not always, accompanied by coronal mass ejections, solar particle events, and other solar phenomena. The occurrence of solar flares varies with the 11-year solar cycle.</h2>
          <h2>Solar flares are thought to occur when stored magnetic energy in the Sun's atmosphere accelerates charged particles in the surrounding plasma. This results in the emission of electromagnetic radiation across the electromagnetic spectrum.</h2>
          <h2>The frequency of occurrence of solar flares varies with the 11-year solar cycle. It can range from several per day during solar maximum to less than one every week during solar minimum. Additionally, more powerful flares are less frequent than weaker ones. For example, X10-class //severe flares occur on average about eight times per cycle, whereas M1-class// minor flares occur on average about 2000 times per cycle.</h2>
        </div>
      </div>
      <BottomNav />
    </>
  )
}

export default Solar