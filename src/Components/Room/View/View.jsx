import React, { useContext } from 'react'

import { Context } from '../../../App'

function View() {

    const [selectedRoom, setSelectedRoom] = useContext(Context)

  return (
    <div>
      <h1>Room View</h1>
      <p>{selectedRoom.name}</p>
    </div>
  )
}

export default View
