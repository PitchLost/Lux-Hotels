import React, { useState, useContext } from 'react';
import { RoomContext } from '../../App';
import './Booking.css';

import { purchaseRoom } from '../../Hooks/purchaseRoom'
function Booking() {
  const [selectedRoom] = useContext(RoomContext);
  const [nights, setNights] = useState(1); // Default to 1 night
  const [totalPrice, setTotalPrice] = useState(selectedRoom.price);

  const handleNightsChange = (e) => {
    const nightsValue = parseInt(e.target.value, 10) || 1; 
    setNights(nightsValue);
    setTotalPrice(selectedRoom.price * nightsValue); // Update the total price
  };

  return (
    <div className='booking'>
      <h1>Finalise Booking</h1>
      <p>Please note that by completing your purchase you accept that you may not cancel the booking from 24 hours before check in.</p>
      <div className='booking-room'>
        <h1>{selectedRoom.name}</h1>
        <p>${selectedRoom.price} per night</p>
        <h1>How many nights would you like?</h1>
        <input
          className='purchase-nights-input'
          type='number'
          min='1'
          value={nights}
          onChange={handleNightsChange} // Call the handler to update nights and price
        />
        <h1>Final Price: <span>${totalPrice}</span></h1>
      </div>
      <button onClick={() => purchaseRoom(selectedRoom, nights)}>Purchase</button>
    </div>
  );
}

export default Booking;
