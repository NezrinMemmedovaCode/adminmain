import React from 'react'

import { Outlet } from 'react-router-dom'
import Footer from './AdminLayout/FooterAdmin'
import NavAdmin from './AdminLayout/NavAdmin'
import FooterAdmin from './AdminLayout/FooterAdmin'


function Admin() {
  return (
    <div>
     <NavAdmin></NavAdmin>
     <Outlet></Outlet>
     <FooterAdmin></FooterAdmin>
    </div>
  )
}

export default Admin