import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Cards from './Cards'
import styled from 'styled-components';
import { Link, Navigate } from 'react-router-dom';
const Slider = () => {
  const {wheels} = useSelector((store) => store.allWheel);

  return (
    <Wrapper className="carrd">
      
        {wheels.map((wheels) => {
            return(
              <a href={`/${wheels._id}`}>
            <Cards 
            key={wheels._id}
            {...wheels}
            />
            
            </a>
            )
            
          })}
     </Wrapper>
  )
}

const Wrapper = styled.main`
margin-top : 3rem;
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  overflow: scroll;
  margin-left: 0px;
  padding-right: 50px;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

`

export default Slider