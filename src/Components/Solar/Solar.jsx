import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './Solar.css'
import BottomNav from '../BottomNav/BottomNav';



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
    <h1>Solar</h1>
    <BottomNav />
    </>
  )
}

export default Solar