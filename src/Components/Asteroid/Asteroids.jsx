import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'




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

      }) .catch(
        (error) => {console.log(error)}
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
                    {
                      
                    }
                </div>
            </div>
            <div className='Info-Wrapper'>
                <div className='Info'>
                  <select onChange={handleChange}>
                    {
                      Object.keys(data.near_earth_objects || {}).map((fecha, index) => {
                        return(
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
