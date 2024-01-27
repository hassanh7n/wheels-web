import React from 'react'
import styled from 'styled-components'
import { Link, Navigate } from 'react-router-dom';

const About = () => {
  return (
    <Wrapper>
      <><Link className='link' to='/'><h4>Back to home page?</h4></Link></>
      <h1>Our Goal</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repudiandae sunt nostrum hic vero eius, magnam perferendis pariatur similique modi corporis obcaecati consequatur impedit nisi facere esse repellendus est itaque. Exercitationem possimus voluptatibus saepe necessitatibus dolore quae sed, sequi illo tenetur asperiores ratione quos nemo adipisci dolores iste vero ad tempore ex ipsam, quis expedita! Nostrum laborum delectus est totam repellat cupiditate magnam provident, distinctio hic maxime in quam veritatis sed accusantium ea earum nihil, assumenda soluta aliquid eligendi cumque.</p>
    </Wrapper>
  )
}

const Wrapper = styled.main`
background : #d7d7d7;
display : flex;
/* margin-top:  1rem; */
padding : 1rem 2rem;
align-items : center;
height : 100vh;
justify-content:center;
flex-direction: column;
.link{
  align-self : start;
  margin-bottom : 2rem;
  color : #00000096;

}
`

export default About