import React, { useEffect, useState } from 'react'
import './Room.css'

// Import components
import Tags from './Tags/Tags'
import Rooms from './Rooms/Rooms'


function Room() {
    const [selectedTag, setSelectedTag] = useState({label: 'Premium', filter: 'prem'}) // Selected Tag state for room filtering

    // Content
  return (
    <div className='room'>
      <h1 className='room-main-header'>View our available rooms</h1>
      <div className='room-tags'> 
        <Tags selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
        <h1 className='room-tag-header'>{selectedTag.label}</h1>
        <Rooms tag={selectedTag} />
      </div>
    </div>
  )
}

export default Room
