import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ComputerDisplay from '../../components/ComputerDisplay/ComputerDisplay'
import AboutUs from '../AboutUs/AboutUs'

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
      {/* <Header/> */}
      {/* <AboutUs /> */}
      <ComputerDisplay category={category}/>
    </>
  )
}

export default Home
