import React from 'react'
import styled from 'styled-components';
import ProductInfo from './ProductInfo';
import {GiPriceTag} from 'react-icons/gi'
import {SiNamecheap} from 'react-icons/si'
import { deletProduct, updateWheel, setEditJob } from '../features/Wheels';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductsMy = ({name, images, price, _id, category, type, contactNo, discription, company, color, location}) => {
  const dispatch = useDispatch();
  const {wheelId} = useSelector((store) => store.Wheel)
  return (
    <Wrapper>
        <header>
            <img src={images?.[0]?.url} alt="" />
        </header>
        <div className='content'>
        <div className='content-center'>
        <ProductInfo icon={<SiNamecheap/>} text={name}/>
        <ProductInfo text={'' + price + "$"}/>
        </div>
        <footer>
          <div className='actions'>
            <Link
              to='/add-wheel'
              className='btn edit-btn'
              onClick={
                () => {
                  dispatch(
                    setEditJob({
                      wheelId : _id,
                      name,
                      color,
                      category,
                      type,
                      company,
                      location,
                      discription,
                      images,
                      price,
                      contactNo
                    })
                  )
                }
              }
            >
              Edit
            </Link>
            <button
              type='button'
              className='btn delete-btn'
              onClick={
                () => dispatch(deletProduct(_id))
              }
            >
              Delete
            </button>
          </div>
        </footer>
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
  padding: 1rem 1rem;
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
`;

export default ProductsMy