import React, { useContext, useEffect, useState } from 'react'
import './Room.css'

// Import components
import Tags from './Tags/Tags'
import Rooms from './Rooms/Rooms'

import { DarkContext } from '../../App'


function Room() {
    const [darkMode ,setDarkMode] = useContext(DarkContext)
    const roomClass = darkMode ? 'room-dark': 'room-light'
    const [selectedTag, setSelectedTag] = useState({label: 'Premium', filter: 'prem'}) // Selected Tag state for room filtering

    // Content
  return (
    <div className='room'>
      <div className={`tags-ribbon ${roomClass}`}>

      </div>
      <div className='room-tags'> 
        <Tags selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
        <h1 className='room-tag-header'>{selectedTag.label}</h1>
        <Rooms tag={selectedTag} />
      </div>
    </div>
  )
}

export default Room
