import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Landing, Error, About, Wheels, ProtectedRoutes, AddWheels} from './pages';
import {Dashborad, Register, Login} from './pages/Dashboard'
import { SingleWheel } from './components';
import styled from 'styled-components'

const App = () => {
  return (
    // <Landing/>
    <Wrapper>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={
        <Landing/>
      }>
        </Route>
        <Route path='add-wheel' element={
          <ProtectedRoutes>
            <AddWheels />
          </ProtectedRoutes>
        } />
        <Route path='dashboard' element={
          <ProtectedRoutes>
            <Dashborad />
          </ProtectedRoutes>
        } />
        {/* <Route path='/:id' element={<SingleProduct/>} /> */}
        <Route path='register' element={<Register/>} />
        <Route path='login' element={<Login/>} />
        <Route path='/:id' element={<SingleWheel/>} />
        <Route path='about' element={<About/>} />
        <Route path='wheels' element={<Wheels/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>
    </Wrapper>
  )
}
const Wrapper = styled.main`

`
export default App