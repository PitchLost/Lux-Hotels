import React from 'react'
import { useContext } from 'react'
import { Context } from '../../App'

import './Booking.css'

function Booking() {
    const [selectedRoom, setSelectedRoom] = useContext(Context)
  return (
    <div className='booking'>
      <h1>Finalise Booking</h1>
      <p>Please note that by completing your purchase you accept that you may not cancel the booking from 24 hours before check in</p>
      <div className='booking-room'> 
        <h1>{selectedRoom.name}</h1>
        <p>${selectedRoom.price}</p>
    </div>
    <button>Purchase</button>
    </div>
  )
}

export default Booking
