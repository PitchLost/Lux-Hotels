// All components that are on the home page are mounted here to allow for easy layout changes if wanted in the future. 
// It also helps with keeping app.js nice and tidy since we only have to mount this component there.

import React from 'react'


// Import the components to mount onto the home page
import Landing from '../Landing/Landing'
import Trust from '../Trust/Trust'
import Services from '../Services/Services'

function Home() {
  
  return (
    <div>
      {/* Landing Page */}
      <Landing /> 

      {/* Why we can be trusted */}
      <Trust />

      {/* What our rooms offer */}
      <Services />
    </div>
  )
}

export default Home
