import React from 'react'
import {Navbar, Carousel, Slider, Footer} from '../components'
import { Link, Navigate } from 'react-router-dom';
import styled from 'styled-components';

const Landing = () => {
  
  return (
    <Wrapper>
        <Navbar />
        <Carousel />
        <Link className='link' to='/wheels'><h4>Wants to see all wheels?</h4></Link>
        <Slider />
        <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.main`
h4{
  padding-left : 3rem;
}
`

export default Landing