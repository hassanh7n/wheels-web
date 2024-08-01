import React, { useState } from 'react'
import FormRowSelect from './FormRowSelect';
import FormRow from './FormRow';
import { useDispatch, useSelector } from 'react-redux';
import {Navbar} from '../components'
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { handleChange, createProduct, clearValues, uploadImages, updateWheel } from '../features/Wheels';
import { Link } from 'react-router-dom';


const AddWheels = () => {
    const [pics, setPics] = useState([]);
  const [file, setFile] = useState([]);
    const dispatch = useDispatch();
    const {
        isLoading,
        name,
        price,
        images,
        discription,
        company,
        category,
        categoryOptions,
        color,
        location,
        type,
        typeOptions,
        contactNo,
        isEditing,
        wheelId
      } = useSelector((store) => store.Wheel)


      const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(handleChange({name, value}))
    
      };

      const handleSubmit = (e) => {
        e.preventDefault()
        if (isEditing === true) {
          // console.log(category);
          dispatch(
            updateWheel({
              wheelId: wheelId,
              wheel: { name,
                name,
                      color,
                      category,
                      type,
                      company,
                      location,
                      discription,
                      images,
                      price,
                      contactNo}
                      ,
            })
            );
            return;
          }

        if(!images){
            toast.error("upload images first")
        }
        if(images){

            dispatch(createProduct({
                name : name,
                price : price,
                discription : discription,
                images : images,
                company : company,
                location : location,
                category : category,
                type : type,
                color : color,
                contactNo : contactNo
            }))
        }
        
      }

      const handleImage = (e) =>{
        const files = Array.from(e.target.files);
        console.log(files.length);
        
        
           const formData = new FormData()
      
            files.forEach(file =>{
            formData.append('file', file)
    
            })

            if(files.length === 1){
                toast.error("Please select more than one image")
            }else{
    
                dispatch(uploadImages(formData))
            }
            
    }

  return (
    <>
    <Navbar />
    {/* <div className="div">
    <h4 className=''><Link className='link' to='/'>Back to home page?</Link></h4>
    </div> */}
    <Wrapper>
    <form  className="form" onSubmit={handleSubmit}>
      {/* <h3>{isEditing ? 'edit job' : 'add job ' }</h3> */}
    <div className="form-center">
      {!isEditing && (
        <div className="input">
        <label  for="fileUpload">Upload images</label>
        <input className='file-input' onChange={handleImage} type="file" name="img" id="file-input" placeholder='choose file' multiple />
        </div>
      )}
      {/* name */}
      <FormRow 
      type='text'
      name='name'
      value={name}
      handleChange={handleInput}
      />
      {/* price */}
      <FormRow 
      type='number'
      name='price'
      value={price}
      handleChange={handleInput}
      />
      {/* discription */}
      <FormRow 
      type='text'
      name='discription'
      value={discription}
      handleChange={handleInput}
      />
      {/* inventory */}
     {/* colors */}
     <FormRow 
      type='text'
      name='color'
      value={color}
      handleChange={handleInput}
      />
      
      
        {/* company status */}
        <FormRow 
      type='text'
      name='company'
      value={company}
      handleChange={handleInput}
      />

      <FormRow 
      type='text'
      name='location'
      value={location}
      handleChange={handleInput}
      />



      <FormRow 
      type='text'
      name='contactNo'
      value={contactNo}
      handleChange={handleInput}
      />


        {/* category type */}
        <FormRowSelect

          name='category'
          labelText='category'
          value={category}
          handleChange={handleInput}
          lists={categoryOptions}
          />
        


        <FormRowSelect
          name='type'
          labelText='type'
          value={type}
          handleChange={handleInput}
          lists={typeOptions}
        />


       
        {/* btn container */}
        <div className='btn-container'>
          
          <button
            type='submit'
            className='btn btn-block submit-btn'
            onClick={handleSubmit}
            disabled={isLoading}
          >
            submit
          </button>
        </div>


    </div>

    </form>

  </Wrapper>
    </>
    
  )
}


const Wrapper = styled.main`
overflow-x: hidden;
width : 100%;
border-radius: var(--borderRadius);
margin : 50px 10px;
background: var(--primary-50);
padding: 3rem 2rem 4rem;
box-shadow: var(--shadow-2);
#file-input::file-selector-button{
  /* margin-top : 2.1rem; */
  font-weight: bold;
  color: dodgerblue;
  padding: 0.5em;
  border: thin solid grey;
  border-radius: 3px;
}
.link{
  color : #00000096;
}
h3 {
  margin-top: 0;
}
.form {
  margin: 0px;
  border-radius: 0;
  box-shadow: none;
  padding: 0;
  max-width: 100%;
  width: 100%;
}
.form-row {
  margin-bottom: 0;
}
.form-center {
  display: grid;
  row-gap: 0.5rem;
}
.form-center button {
  align-self: end;
  height: 35px;
  margin-top: 1rem;
}
.btn-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.3rem;
  align-self: flex-end;
  margin-top: 0.5rem;
  button {
    height: 35px;
  }
}
.clear-btn {
  background: var(--grey-500);
}
.clear-btn:hover {
  background: var(--black);
}
.form-inputt{
  margin-top : 2.1rem;
  width: 100%;
  padding: 0.375rem 0.75rem;
  border-radius: var(--borderRadius);
  background: var(--backgroundColor);
  border: 1px solid var(--grey-200);
}
.input{
    display : flex;
    flex-direction : column;
    gap : 5px;
}

@media (min-width: 992px) {
  .form-center {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    column-gap: 1rem;
  }
  .btn-container {
    margin-top: 0;
  }
}
@media (min-width: 1120px) {
  .form-center {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .form-center button {
    margin-top: 0;
  }
}
`

export default AddWheels