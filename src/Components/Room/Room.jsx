import React, { useState } from 'react'
import Tags from './Tags/Tags'
import Rooms from './Rooms/Rooms'
import './Room.css'

function Room() {
    const [selectedTag, setSelectedTag] = useState({label: 'Premium', filter: 'prem'})
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
