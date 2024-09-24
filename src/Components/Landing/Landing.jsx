import React from 'react';
import Image1 from './Assets/lobby-398845_1920.jpg';
import './Landing.css';

function Landing() {
  return (
    <div className="landing-container">
      <h1>Welcome to Lux Hotels,</h1>
      <h2>Booking a room has never been easier</h2>
      <img src={Image1} alt="Luxurious Hotel Lobby" />
      <button className="landing-button">Book Now</button>
    </div>
  );
}

export default Landing;
