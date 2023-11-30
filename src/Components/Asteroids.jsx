import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'




let myDate = new Date();
let year = myDate.getFullYear();
let month = myDate.getMonth() + 1;
let day = myDate.getDate();
let todaysDate = `${year}-${month}-${day}`;


const baseUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${todaysDate}&end_date=END_DATE&api_key=K94Zcfj55KWoHu8AB1rj6Q4hdcFjsgAfyfo97Zjs`


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

    useEffect(() => {
      fetchData().then((response) => {
        setData(response)
        console.log(response)
      }) .catch(
        (error) => {console.log(error)}
      )
    
    }, []);



  return (
    <div>Asteroids</div>
  )
}
