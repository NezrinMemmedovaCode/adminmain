import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.scss"

function Nav() {
  return (
    <>
      <div className="ulli">
      <p>
    <i class="fa-solid fa-bars"></i>
    React App,|routing,Json-server
    </p>
    <div className="linkss">

<Link className='links' to="/">MAIN SITE</Link>
<Link className='links' to="favorites">Favorites</Link>
<Link className='links' to="employees">employees</Link>
<Link className='links' to="/admin">Admin</Link>
</div>
</div>

  
    
    
    
    </>
  )
}

export default Nav