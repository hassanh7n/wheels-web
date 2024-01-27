import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormRow from './FormRow'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { registerUser, loginUser } from '../../features/User'


const initialState = {
  name : "",
  password : "",
  email : "",
  isMember : true,
}

const Register = () => {
  const [values, setValues] = useState(initialState);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const {user, isLoading} = useSelector((store) => store.user);

  const toggleMember = () => {
    setValues({...values, isMember : !values.isMember})
  }
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, email, password, isMember} = values;
    if(isMember){
      dispatch(loginUser({email : email, password : password}))
      return
    }
    console.log(name, email, password, isMember);
    dispatch(registerUser({name: name, email : email, password : password}))
  }

  
    if(user){
      return (
        setTimeout(() => {
                Navigate('/')
              }, 2000)
      )
    }

    
  

  return (
    <Wrapper className='oooo'>
        <form onSubmit={handleSubmit} className="from" >
               
                <h1 className='h3'>Wheels~</h1>
                {/* <span className='span'>STORE</span> */}
              
               
              {/* name field */}
              {!values.isMember && (
                <FormRow
                  type='text'
                  name='name'
                  value={values.name}
                  handleChange={handleChange}
                />
              )}

              {/* email field */}
              <FormRow
              type='email'
              name='email'
              value={values.email}
              handleChange={handleChange}
              />


               
              <FormRow
              type='password'
              name='password'
              value={values.password}
              handleChange={handleChange}
              />

        


      <button type='submit' className='btn butu btn-block btn-hipster' 
      // disabled={isLoading}
      >
        
        {isLoading ? 'loading...' : 'submit'}
      </button>
      <p className='h3'>
          {values.isMember ? 'enter your password?' : 'already have an account?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'register' : 'login'}
          </button>

        </p>    
        </form>
    </Wrapper>
  )
}
const Wrapper = styled.main`

    display: grid;
    align-items: center;
    justify-content: center;
    min-height: 100vh;


/* .name{
    color: black;
}
span{
    color: var(--bodyFont);
    font-size: 3.052rem;
} */


.from{
    width: 350px;
    border-top: 5px solid var(--primary-500);
    border-radius : 10px;
    background-color : white;
    padding : 1.4rem;
  }
  .h3{
    width: 100%;
    text-align : center;
  }
  .p{
    margin : 0;
    margin-top : 1rem;
    text-align : center;
  }
  .btn{
    margin-top : 1rem;
  }
  .member-btn {
      background: transparent;
      border: transparent;
      color: var(--primary-500);
      cursor: pointer;
      letter-spacing: var(--letterSpacing);
    }
.butu{
  color : black;

}
`

export default Register