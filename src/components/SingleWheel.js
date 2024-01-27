import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom'
import ProductImages from './ProductImages';
import styled from 'styled-components';
import PageHero from './PageHero';
import { singleWheel } from '../features/AllWheels';




const SingleWheel = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const {wheel, isLoading} = useSelector((store) => store.allWheel)
    console.log(wheel, isLoading);
    useEffect(() => {
        dispatch(singleWheel(id))
    }, [id])
    const {name, company, discription, color, location,  price, category, type, images, contactNo} = wheel;
  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className='section section-center page'>
        <Link to='/wheels' className='btn'>
          back to wheels
        </Link>
        <div className='product-center'>
            {/* {images.map((image) => {
                console.log(image);
            })

            } */}
          <ProductImages images={images} />
          <section className='content'>
            <h2>{name}</h2>
            <h5 className='price'>{price  + "$"}</h5>
            <p className='desc'>{discription}</p>
            <p className='info'>
              <span>Type :</span>
              {type}
            </p>
            <p className='info'>
              <span>Category :</span>
              {category}
            </p>
            <p className='info'>
              <span>Brand :</span>
              {company}
            </p>
            <p className='info'>
              <span>Color :</span>
              {color}
            </p>
            <hr />
            <p className='info'>
              <span>Location :</span>
              {location}
            </p>
            <p className='info'>
              <span>Contact No :</span>
              {contactNo}
            </p>
            
          </section>
        </div>
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.main`
margin : 1rem;
margin-top : 2rem;
padding: 1rem;
background-color: rgb(200, 211, 234);
border-radius : 10px;
padding-bottom : 5rem;

  .product-center {
    display: grid;
    gap: 0rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  .content{
    margin : 1rem;
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleWheel