import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { handleChange, clearFilters } from '../features/AllWheels'
import RangeSelector, {
  Margin, Scale, MinorTick, Label, SliderMarker,
} from 'devextreme-react/range-selector';
import FormRowSelect from './FormRowSelect';
import FormRow from './FormRow';
import { Link } from 'react-router-dom';


const SearchContainer = () => {
  const dispatch = useDispatch();
  const defaultValue = [40000, 80000];
  const {
    isLoading,
    categoryOptions,
    // companyOptions,
    sort,
    sortOptions,
    category,
    company,
    location,
    name
  } = useSelector((store) => store.allWheel);

  
    const handleSearch = (e) => {
      if(isLoading) return;
      dispatch(handleChange({name : e.target.name, value : e.target.value}));
    
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(clearFilters())
    }
  return (
    <Wrapper>
      {/* <><Link className='link' to='/'><h4>Back to home page?</h4></Link></> */}
      <form className="form">
        <h4>search form</h4>
        <div className="from-center">
          {/* name */}
          <FormRow 
          type='text'
          name='name'
          value={name}
          handleChange={handleSearch}
          />

          {/* search by status */}
          <FormRowSelect
            labelText='category'
            name='category'
            value={category}
            handleChange={handleSearch}
            lists={['all', ...categoryOptions]}
          />

          {/* Search by company */}
          <FormRow 
          type='text'
          name='company'
          value={company}
          handleChange={handleSearch}
          />
          
          {/* Search by location */}
          <FormRow 
          type='text'
          name='location'
          value={location}
          handleChange={handleSearch}
          />

          <FormRowSelect
            name='sort'
            value={sort}
            handleChange={handleSearch}
            lists={sortOptions}
          />  
          {/* <RangeSelector
    id="range-selector"
    defaultValue={defaultValue}
  >
    <Margin top={20} />
    <Scale
      startValue={15000}
      endValue={150000}
      minorTickInterval={500}
      tickInterval={15000}>
      <MinorTick visible={false} />
      <Label format="currency" />
    </Scale>
    <SliderMarker format="currency" />
  </RangeSelector> */}

          <button
          className='btn btn-block btn-danger'
          disabled={isLoading}
          onClick={handleSubmit}
          >
            clear filters
          </button>

        </div>
      </form>
    </Wrapper>
  )
}


const Wrapper = styled.main`
margin: -30px 15px;
.form {
    width: 100%;
    max-width: 100%;
  }
  .form-input,
  .form-select,
  .btn-block {
    height: 35px;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2rem;
    row-gap: 0.5rem;
  }
  h5 {
    font-weight: 700;
  }
  .btn-block {
    align-self: end;
    margin-top: 1rem;
  }
  @media (min-width: 768px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .btn-block {
      margin-top: 0;
    }
  }
`

export default SearchContainer