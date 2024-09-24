import React from 'react'
import { useNavigate } from 'react-router-dom'

import Landing from '../Landing/Landing'
import Trust from '../Trust/Trust'

function Home() {
const navigate = useNavigate()


function openRoomSelection() { 
  navigate('/room')
  }
  
  return (
    <div>
      <Landing />
      <Trust />
    </div>
  )
}

export default Home
