// Import react stuff
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

// Import additional assets
import Image1 from './Assets/lobby-398845_1920.jpg';


function Landing() {

  const navigate = useNavigate() // For navigation to /room

  // Content
  return (
    <div className="landing-container">
      <h1>Welcome to Lux Hotels,</h1>
      <h2>Booking a room has never been easier</h2>
      <img src={Image1} alt="Luxurious Hotel Lobby" />
      <button className="landing-button" onClick={() => navigate('/room')}>Book Now</button>
    </div>
  );
}

export default Landing;
