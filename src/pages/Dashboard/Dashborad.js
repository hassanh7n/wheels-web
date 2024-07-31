import React from 'react'
import AddProduct from './AddProduct'
import MyProducts from './MyProducts'
import { Navbar } from '../../components'
const Dashborad = () => {
  return (
    <div>
      <Navbar />
      <AddProduct />
      <MyProducts />
    </div>
  )
}

export default Dashborad