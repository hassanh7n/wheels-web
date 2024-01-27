import React, { useState } from 'react'
import AreaChartProduct from './AreaChartProduct';
import BarChartProduct from './BarChartProduct';
import { useSelector } from 'react-redux';
import styled from 'styled-components';


const ChartsContainerProduct = () => {
  const [barData, setBarData] = useState(true);
  const {wheelStats : data} = useSelector((store) => store.stats);

  return (
    <Wrapper>
    <h4>Products Stats</h4>
      <button type='button' onClick={() => setBarData(!barData)}>
        {barData ? 'Area Chart' : 'Bar Chart'}
      </button>
        {barData ? <BarChartProduct data={data} /> : <AreaChartProduct data={data} />}
    </Wrapper>

  )
};


const Wrapper = styled.main`
margin: 1rem;
margin-top: 3rem;
padding : 4rem 4rem 4rem 0rem;
border-radius : 10px;
  text-align: center;
  background: white;
  button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: var(--primary-500);
    font-size: 1.25rem;
    cursor: pointer;
  }
  h4 {
    text-align: center;
    margin-bottom: 0.75rem;
  }
`

export default ChartsContainerProduct