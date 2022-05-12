import React from 'react'

const Login = () => {
  return (
    <section className='section about-section'>
      <h4 className='section-title'>Enter your login credentials</h4>
     <form>
     <h5 className='nav-links'>Username  <input type="text" name='firstname' placeholder='akshat_pathak' /></h5>
     <h5 className='nav-links'>Password  <input type="text" name='firstname' placeholder='akshat@1234' /></h5>
       {/* <input type="text" name='firstname' placeholder='akshat' />
       <label htmlFor="Password" className='nav-links'>Password</label>
       <input type="text" name='Lastname' placeholder='pathak@1234' /> */}

       <button className='btn nav-links'>Sign In</button>

      
     </form>
     
      
      
    </section>
  )
}

export default Login
