import React from 'react'
import styled from 'styled-components';
import ProductInfo from '../components/ProductInfo';
import {SiNamecheap} from 'react-icons/si'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Product = ({name, images, price, _id, category, type, contactNo, discription, company, color, location}) => {
  const dispatch = useDispatch();
  const {wheelId} = useSelector((store) => store.Wheel)
  return (
    <Wrapper>
        <header>
            <img src={images?.[0]?.url} alt="" />
        </header>
        <div className='content'>
        <h3 className='name'>{name}</h3>
        <h5 className='price '>{ price + "$"}</h5>
        <p className='location'>{location}</p>
        
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
background: var(--primary-50);
border-radius: var(--borderRadius);
display: grid;
grid-template-rows: 1fr;
box-shadow: var(--shadow-2);

header {
  padding: 1rem 1rem;
  border-bottom: 1px solid var(--grey-100);
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  h5 {
    letter-spacing: 0;
  }
}
img{
  width: 100%;
  height: auto;
  display: grid;
  place-items: center;
  background: var(--primary-500);
  border-radius: var(--borderRadius);
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--white);
}
/* @media (min-width: 500px){
    img{
        width: 380px;
  height: auto;
    }
} */
.info {
  h5 {
    margin-bottom: 0.25rem;
  }
  p {
    margin: 0;
    text-transform: capitalize;
    color: var(--grey-400);
    letter-spacing: var(--letterSpacing);
  }
}
.pending {
  background: #cccc00;
  color: white;
}
.interview {
  background: #e0e8f9;
  color: #647acb;
}
.declined {
  color: #d66a6a;
  background: #ffeeee;
}
.content {
  padding: 0rem 1rem;
}
.content-center {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 0.5rem;
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr;
  }
}

.status {
  border-radius: var(--borderRadius);
  text-transform: capitalize;
  letter-spacing: var(--letterSpacing);
  text-align: center;
  width: 100px;
  height: 30px;
  margin-top: 0.5rem;
}
footer {
  margin-top: 1rem;
}
.edit-btn,
.delete-btn {
  letter-spacing: var(--letterSpacing);
  cursor: pointer;
  height: 30px;
}
.edit-btn {
  color: var(--green-dark);
  background: var(--green-light);
  margin-right: 0.5rem;
}
.delete-btn {
  color: var(--red-dark);
  background: var(--red-light);
}
&:hover .actions {
  visibility: visible;
}
.location{
  color : grey;
}
.price,
.location{
  margin-top : -25px;
}
.price{
  color : green;
}
`;

export default Product