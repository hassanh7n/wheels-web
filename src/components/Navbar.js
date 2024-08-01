import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
// import logo from '../images/LogoMakerCa-1701546261507-removebg-preview.png';
import tyre from '../images/tire (1).png';
import SideBar from './SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { logouttUser, toggleSidebar } from '../features/User';
import { FaUserCircle, FaCaretDown } from 'react-icons/fa'
import styled from 'styled-components';

const Navbar = () => {
  const {user} = useSelector((store) => store.user);
  // console.log(user.name);
  const dispatch = useDispatch();
  const {isSidebarOpen} = useSelector((store) => store.user);
  const [showLogout, setShowLogout] = useState(false)
  const toggle = () => {
    dispatch(toggleSidebar())
  }
  return (
    <Wrapper>
      <div className='landing'>
      <div className="img">
        {/* <img className='logo' src={logo} alt="" /> */}
        <h1 className='text'>Wheels</h1>
        <img className='tyre' src={tyre} alt="" />
      </div>
      <div className="lists">
        <ul>
          <a href="/"><li>Home</li></a>
          {/* <a href="wheels"><li>Wheels</li></a> */}
          <a href="about"><li>About</li></a>
          <a href="add-wheel"><li>Add-Wheel</li></a>
          <a href="dashboard"><li>Dashboard</li></a>
        </ul>
      </div>
      {user && (
        <div className="btn-container">
        <button 
        className='btn'
        type='button'
        onClick={() =>setShowLogout(!showLogout)}
        >
          <FaUserCircle />
          {user?.name}
          <FaCaretDown />
        </button>
        <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
          <button
          type='button'
          className='dropdown-btn'
          onClick={() => dispatch(logouttUser('Logging out...'))}
          >
            logout
          </button>
        </div>
      </div>
      )}
      <button
              type='button'
              className='toggle-btn'
              onClick={toggle}
              >
              <FiMenu />
            </button>
      <SideBar />
    </div>
    </Wrapper>
  )
}



const Wrapper = styled.main`
margin-bottom : 5px;
box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.42);
  -webkit-box-shadow: 5px -100px 5px 5px rgba(0,0,0,0.42);
  -moz-box-shadow: 5px 5px 5px 5px rgba(0,0,0,0.42);
.landing{
    padding: 5px 0px;
    display: flex;
    justify-content: space-between;
    background-color: white;
    box-shadow: 10px 10px 0px 0px rgba(0,0,0,0.42);
  -webkit-box-shadow: 10px 5px 0px 0px rgba(0,0,0,0.42);
  -moz-box-shadow: 10px 10px 0px 0px rgba(0,0,0,0.42);
}
.img{
    display: flex;
    margin: 5px;
    gap: 0.3rem;
    /* position: absolute; */
}
.text{
    color: black;
    font-family: serif;
    font-size: 40px;
}
.tyre{
    margin-top: 10px;
    width : auto;
    height: 40px;
    position: relative;
    animation: wheelrotation linear 1.5s infinite;
}
.lists{
    padding-top: 10px;
    /* margin-right: 0vw; */
}

.lists ul{
    display: none;
    gap: 20px;
    margin-left: -59vw;
    /* cursor: pointer; */
}
.lists li{
    font-size: larger;
    cursor: pointer;
}
.lists a{
    color: black;
    cursor: pointer;
}
li{
    cursor: pointer;
}
.toggle-btn {
    padding-top: 25px;
    margin-right: 0px;
    background: transparent;
    border-color: transparent;
    font-size: 1.85rem;
    /* color: var(--primary-500);
     */
     color: black;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 50px;
}

@media (min-width: 850px){
    .landing{
        justify-content: left;
    }
    .lists ul{
        display: flex;
        /* cursor: pointer; */
    }
    .toggle-btn{
        display: none;
    }
}
.btn-container {
    position: relative;
    padding-top: 22px;
  }
  .btn {
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
  }

  .dropdown {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }
  .logo-text {
    display: none;
    margin: 0;
  }

@keyframes wheelrotation
  {
      100%{
      transform: rotate(360deg)
     }
  }

`

export default Navbar