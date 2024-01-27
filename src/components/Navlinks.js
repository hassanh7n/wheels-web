import React from 'react'
import links from '../utils/Links';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navlinks = ({toggleSidebar}) => {
    return (
        <Wrapper className='nav-links'>
          {links.map((link) => {
            const { text, path, id, icon } = link;
    
            return (
              // <h1>text</h1>
              // <NavLink to="/">Home</NavLink>
              <NavLink
                to={path}
                key={id}
                onClick={toggleSidebar}
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                <span className='icon'>{icon}</span>
                {text}
              </NavLink>
            );
          })}
        </Wrapper>
      );
}

const Wrapper = styled.main`
    width : 200px;
    gap: 20px;
    align-items : center;
    text-align : center;
.nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
      
    }
    .nav-link {
      display: flex;
      gap : 5px;
      align-items: center;
      color: var(--grey-500);
      padding: 1rem 0;
      text-transform: capitalize;
      transition: var(--transition);
      cursor : pointer;
    }
    .nav-link:hover {
      color: var(--grey-900);
    }
    .nav-link:hover .icon {
      color: var(--primary-500);
    }
    .icon {
      cursor : pointer;
      font-size: 1.9rem;
      margin-right: 0rem;
      display: grid;
      place-items: center;
      transition: var(--transition);
    }
    .active {
      color: var(--grey-900);
    }
    .active .icon {
      color: var(--primary-500);
    }
    .img{
      width : 150px
    }
`

export default Navlinks