import React from 'react'
import { useNavigate } from 'react-router-dom'

import Landing from '../Landing/Landing'
import Trust from '../Trust/Trust'
import Services from '../Services/Services'

function Home() {
const navigate = useNavigate()


function openRoomSelection() { 
  navigate('/room')
  }
  
  return (
    <div>
      <Landing />
      <Trust />
      <Services />
    </div>
  )
}

export default Home
