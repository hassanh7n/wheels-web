import React, { useEffect } from 'react'
import {Navbar, MyWheels, SearchContainer } from '../components'
import Products from './Products'



const Wheels = () => {

  return (
    <div>
      
      <SearchContainer />
      {/* <MyWheels /> */}
      <Products />
    </div>
  )
}

export default Wheels