import React from 'react'

const About = () => {
  return (
    <section className='section about-section'>
      {/* <h2 className='section-title'>Register your event here</h2> */}
      <h2 className='nav-links'>Event registration Form</h2>
     <form>
       <h5 className='nav-links'>First Name  <input type="text" name='firstname' placeholder='akshat' /></h5>
       <h5 className='nav-links'>Last Name  <input type="text" name='Lastname' placeholder='pathak' /></h5>
      
     
      
       <div>
         .
       </div>

       <h4 className='nav-links'>Event Type</h4>
       <div>
         <h6 className='nav-links'>Virtual mode <input type="checkbox" /></h6>
         <h6 className='nav-links'>offline mode <input type="checkbox" /></h6>
       </div>
      
       <h5 className='nav-links'>Phone Number  <input type="Number"  placeholder='9893933xx7' /></h5>
       <h5 className='nav-links'>Email  <input type="text" name='email' placeholder='akshatpathak@xyz.com' /></h5>
       
   
       

       <button className='btn nav-links'>Register event </button>
      
     </form>
     
      
      
    </section>
  )
}

export default About
