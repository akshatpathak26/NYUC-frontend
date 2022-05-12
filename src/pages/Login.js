import React from 'react'

const Login = () => {
  return (
    <section className='section about-section'>
      <h4 className='section-title'>Enter your login credentials</h4>
     <form>
       <label htmlFor="firstname" className='nav-links'>First Name</label>
       <input type="text" name='firstname' placeholder='akshat' />
       <label htmlFor="Lastname" className='nav-links'>Last Name</label>
       <input type="text" name='Lastname' placeholder='pathak' />

       <button className='btn nav-links'>Sign In</button>

      
     </form>
     
      
      
    </section>
  )
}

export default Login
