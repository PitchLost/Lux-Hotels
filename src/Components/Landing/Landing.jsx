import React from 'react';
import Image1 from './Assets/lobby-398845_1920.jpg';
import './Landing.css';

function Landing() {
  return (
    <div className="landing-container">
      <h1>Effortlessly book a room,</h1>
      <h2>Staff you can trust</h2>
      <img src={Image1} alt="Luxurious Hotel Lobby" />
      <button className="landing-button">Book Now</button>
    </div>
  );
}

export default Landing;
