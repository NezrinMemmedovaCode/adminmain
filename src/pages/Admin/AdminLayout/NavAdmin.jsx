import React from 'react'
import "./NavAdmin.scss"
import { Link } from 'react-router-dom'
function NavAdmin() {
  return (

    <>
    
    
    <div className="ulli">
    <p>
    <i class="fa-solid fa-bars"></i>
    React App,|routing,Json-server
    </p>
    <div className="linkss">

    <Link className='links' to="/">MAIN SITE</Link>
    <Link className='links' to="/admin/employees">EMPLOYEES</Link>
    <Link className='links' to="/admin/addemployee">ADD EMPLOYEE</Link>
    <Link className='links' to="/admin/logout">LOG OUT</Link >
    </div>
    </div>
    </>
  )
}

export default NavAdmin