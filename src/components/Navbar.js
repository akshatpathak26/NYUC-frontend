import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
       
        <ul >
          <li className='nav-links'>
            <Link to='/login'>
            Log in
            </Link>
          </li>
          <li className='nav-links'>
            <Link to='/register'>
            Register event 
            </Link>
          </li>
          <li className='nav-links'>
            <Link to='/'>
            <h4 className='nav-links'>Home</h4>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
