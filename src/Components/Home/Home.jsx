import React from 'react'


// Import the components to mount onto the home page
import Landing from '../Landing/Landing'
import Trust from '../Trust/Trust'
import Services from '../Services/Services'

function Home() {
  
  return (
    <div>
      <Landing />
      <Trust />
      <Services />
    </div>
  )
}

export default Home
