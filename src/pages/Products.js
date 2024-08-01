import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showMyWheels } from '../features/Wheels'
import { allWheelsPublic } from '../features/AllWheels'
import { ProductsMy } from '../components'
import styled from 'styled-components'
import Wheels from './Wheels'
import Product from './Product'
import PageBtnContainer from '../components/PageBtnContainer';


const Products = () => {
  const dispatch = useDispatch();
  const {
      isLoading, 
      wheels, 
      numOfPages, 
      totalwheels,
      name,
      location,
      category ,
      company ,
      type,
      sort,
      page,
  } = useSelector((store) => store.allWheel)
  useEffect(() => {
    dispatch(allWheelsPublic())
  }, [name, company, sort, category, type, page, location, wheels.length])
  
  // console.log(isLoading, wheels, numOfPages, totalwheels);

  if(isLoading === true){
      return(
        <Wrapper>
        <h2>Loading...</h2>
      </Wrapper>
      )
    }
    if(totalwheels === 0){
      return(
        <Wrapper>
        <h2>No product to display.</h2>
      </Wrapper>
      )
    }
  console.log(wheels._id);
  return (
    <Wrapper>

        <h5>
        {totalwheels} Product{wheels.length > 1 && 's'}    found
        </h5>
        <div className="wheel">
        
        {wheels.map((wheel) => {
        const {
          name,
           images, 
           price, 
           _id,
           category,
           type,
           company,
           location,
           discription,
           contactNo,
           color
          } = wheel;
        return(

          <a href={`/${wheel._id}`}>
            <Product 
            key={_id}
            _id={_id}
            name={name}
            images={images}
            price={price}
            category={category}
            type={type}
            company={company}
            location={location}
            discription={discription}
            contactNo={contactNo}
            color={color}
              />
          </a>
        
        )
    })}
        </div>
        {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  )
}

const Wrapper = styled.main`

margin-top: 4rem;
padding : 1rem;
a {
  color : black;
}
h2 {
  text-transform: none;
}
& > h5 {
  font-weight: 700;
}
.wheel {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2rem;
}
/* @media (min-width: 390px) {
  .wheel {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
} */
@media (min-width: 460px) {
  .wheel {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
}
@media (min-width: 790px) {
  .wheel {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    gap: 1rem;
  }
}
@media (min-width: 992px) {
  .wheel {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
  }
}
`
export default Products