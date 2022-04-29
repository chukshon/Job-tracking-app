import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import React from 'react'
import Wrapper from '../assets/wrappers/landing'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='job-tracking' className='logo' />
      </nav>
      <div className='container page'>
        {/* col-1 */}
        <div className='info'>
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        {/* col-2 */}
        <img src={main} alt='job-tracking' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
