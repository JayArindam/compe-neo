import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ComputerDisplay from '../../components/ComputerDisplay/ComputerDisplay'
import AboutUs from '../AboutUs/AboutUs'
import Carousel from '../../components/Carousel/Carousel'
import image5 from './carouselimages/5.jpg'
import image2 from './carouselimages/2.jpg'
import image3 from './carouselimages/3.jpg'

const Home = () => {

  const [category,setCategory] = useState("All")
  
  const images = [
    image5,
    image2,
    image3
  ];

  return (
    <>
      <div>
        <Carousel images={images} />
        {/* <Header/> */}
        {/* <AboutUs /> */}
        <ComputerDisplay category={category}/>
      </div>
      
    </>
  )
}

export default Home
