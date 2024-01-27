import React, { useEffect } from 'react'
import { stats } from '../../features/Stats'
import { useDispatch, useSelector } from 'react-redux'
import { ChartsContainerProduct } from '../../components'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const AddProduct = () => {
  const dispatch = useDispatch();
  const {isLoading, wheelStats} = useSelector((store) => store.stats);
  useEffect(() => {
    dispatch(stats())
  }, [])
  
  if(isLoading){
    return <h5>Loading ...</h5>
  }
  if(wheelStats.length === 0){
    return <Wrapper>
      <h1 className='not'>No products found ...</h1>
      <Link className='link' to='/add-wheel'><h3 className='not'>Add Products?</h3></Link>
    </Wrapper>

  }
  return (
    <Wrapper>
    <h4><Link className='link' to='/'>Back to home page?</Link></h4>
    {wheelStats.length > 0 && <ChartsContainerProduct/>}
    
    </Wrapper>
  )
}
const Wrapper = styled.main`

padding : 4rem 0rem;
align-items : center;
.not{
  margin-left 3rem;
}
.link{
  align-self : start;
  margin-left : 1rem;
  margin-bottom : 3rem;
  color : #00000096;

}
`
export default AddProduct