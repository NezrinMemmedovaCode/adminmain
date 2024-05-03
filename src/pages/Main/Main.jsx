import React from 'react'
import Nav from './MainLayout/Nav'
import { Outlet } from 'react-router-dom'
import Footer from './MainLayout/Footer'

function Main() {
  return (
    <>
    <Nav></Nav>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
    

  
  )
}

export default Main