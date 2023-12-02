import React from 'react'
import './Mars.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';




const baseUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=K94Zcfj55KWoHu8AB1rj6Q4hdcFjsgAfyfo97Zjs';

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


const Mars = () => {
    const [data, setData] = useState({
        photos: []
    })

    useEffect(() => {
        fetchData().then((response) => {
            setData(response)
            console.log(response)
        }).catch(
            (error) => { console.log(error) }
        )

    }, []);





    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                data.photos && data.photos.map((image, index) => {
                    return (
                        <>
                            <SwiperSlide key={index}>
                                <img className='mars-img' src={image.img_src}></img>
                                <div className='Mars-Wrapper'>
                                    <div className='Mars-info'>
                                        <div className='mars-title'>
                                            <h1>{image.camera.full_name}</h1>
                                        </div>
                                        <h2> ID: {image.id}</h2>
                                        <h2>Image Date: {image.earth_date}</h2>
                                        <h2>Landing Date:{image.rover.landing_date}</h2>
                                        <h2>Rover Name: {image.rover.name}</h2>
                                        <h2>Rover Status: {image.rover.status}</h2>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </>
                    )
                })
            }
        </Swiper>
    )
}

export default Mars