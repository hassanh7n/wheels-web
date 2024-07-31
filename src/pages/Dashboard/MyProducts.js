import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showMyWheels } from '../../features/Wheels'
import { ProductsMy } from '../../components'
import styled from 'styled-components'

const MyProducts = () => {
    const dispatch = useDispatch();
    const {isLoading, myWheels, isDelete} = useSelector((store) => store.Wheel);
    useEffect(() => {
        dispatch(showMyWheels())
    }, [isDelete])
    console.log(myWheels, isLoading);
    if(isLoading){
        return(
            <Wrapper>Loading...</Wrapper>
        )
    }
    
  if(myWheels.length === 0){
    return(
      <Wrapper>
      <h2>No product to display.</h2>
    </Wrapper>
    )
  }
  return (
    <Wrapper>

        <h5>
          {myWheels.length } Product{myWheels.length > 1 && 's'} created by you
        </h5>
        <div className="wheel">
        {myWheels.map((wheel) => {
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
            <ProductsMy 
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
        )
    })}
        </div>
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
@media (min-width: 390px) {
  .wheel {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
}
@media (min-width: 600px) {
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
export default MyProducts