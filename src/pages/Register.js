import React from 'react'

const About = () => {
  return (
    <section className='section about-section'>
      <h1 className='section-title'>Register your event here</h1>
     <form>
       <label htmlFor="firstname" className='nav-links'>First Name</label>
       <input type="text" name='firstname' placeholder='akshat' />
       <label htmlFor="Lastname" className='nav-links'>Last Name</label>
       <input type="text" name='Lastname' placeholder='pathak' />
       <label className='nav-links' >
         Registration Type
         </label>
       <div>
         Virtual mode
       <input type="checkbox" />
       </div>
       <div>
         offline mode
       <input type="checkbox" />
       </div>
       <label htmlFor="phone number" className='nav-links'>Phone Number</label>
       <input type="Number"  placeholder='9893933xx7' />
       <label htmlFor="Email" className='nav-links'>Email</label>
       <input type="text" name='email' placeholder='akshatpathak@xyz.com' />

       <button className='btn nav-links'>Register event </button>
      
     </form>
     
      
      
    </section>
  )
}

export default About
