import React from 'react'
import styled from 'styled-components';
import ProductInfo from './ProductInfo';
import {GiPriceTag} from 'react-icons/gi'
import { SiNamebase } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import {SiNamecheap} from 'react-icons/si'
import { MdPriceChange } from "react-icons/md";
import { deletProduct, updateWheel, setEditJob } from '../features/Wheels';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Products = ({name, images, price, _id, category, type, contactNo, discription, company, color, location}) => {
  const dispatch = useDispatch();
  const {wheelId} = useSelector((store) => store.Wheel)
  return (
    <Wrapper>
        <header>
            <img src={images?.[0]?.url} alt="" />
        </header>
        <div className='content'>
        <h3 className='name'>{name}</h3>
        <h5 className='price'>{ price + "$"}</h5>
        <p className='location'>{location}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
:hover{
    transform: scale(1.04);
    transition: 0.5s;
}
background: var(--primary-50);
border-radius: var(--borderRadius);
display: grid;
grid-template-rows: 1fr;
box-shadow: var(--shadow-2);
.price{
    color: green;
}
header {
  padding: 1rem 1rem;
  /* width : 100%;
  height : 100%; */
  border-bottom: 1px solid var(--grey-100);
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  h5 {
    letter-spacing: 0;
  }
}
img{
  display : flex;
  width : 100%;
  align-items: center;
  justify-content : center;
  height : auto;

  @media (min-width: 500px) {
    max-height : 140px;
  min-height : 140px;
}
@media (min-width: 600px) {
    max-height : 200px;
  min-height : 200px;
}
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
/* .content-center {
  display: grid;
  grid-template-columns: 1fr;
  /* row-gap: 0.5rem; */
  @media (min-width: 600px) {
    grid-template-columns: 1fr ;
}
} */

.status {
  border-radius: var(--borderRadius);
  text-transform: capitalize;
  letter-spacing: var(--letterSpacing);
  text-align: center;
  width: 100px;
  height: 30px;
  margin-top: 0.5rem;
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
`;

export default Products