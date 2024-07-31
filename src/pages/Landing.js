import React from 'react'
import {Navbar, Carousel, Slider, Footer} from '../components'
import { Link, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Wheels from './Wheels';


const Landing = () => {
  
  return (
    <Wrapper>
        <Navbar />
        <Carousel />
        {/* <Link className='link' to='/wheels'><h4>Wants to see all wheels?</h4></Link> */}
        <Wheels />
        {/* <Slider /> */}
        <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.main`
background-color : #f2f3f3;
h4{
  padding-left : 3rem;
}
`

export default Landing