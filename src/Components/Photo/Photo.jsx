import React from 'react'
import './Photo.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Modals from './Modal';
import BottomNav from '../BottomNav/BottomNav';
import TopLogo from '../TopLogo/TopLogo';


const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
const apiKey = 'K94Zcfj55KWoHu8AB1rj6Q4hdcFjsgAfyfo97Zjs'

function fetchData() {
  const dataPromise = new Promise((resolve, reject) => {
    try {
      fetch(baseUrl + apiKey)
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




const Photo = () => {
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
      <div className='Photo-Wrapper'>
        <div className='Card'>
          <img src={data.url}></img>
        </div>
      </div>
      <div className='Info-Wrapper'>
        <div className='Info'>
          <div className='inline'>
            <h1>{data.date}</h1>
            <span className='more'>More</span><Modals data={data} />
          </div>
          <h2>{data.explanation}</h2>
        </div>
      </div>
      <BottomNav />
    </>
  )
}

export default Photo