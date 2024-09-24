import React from 'react';
import Image1 from './Assets/receptionists-5975962_1920.jpg';
import './Trust.css'; // Import CSS

function Trust() {
  return (
    <div className="trust-container">
      <h1 className="trust-title">Why Us?</h1>
      <p className="trust-description">
        We are dedicated to providing top-tier service, ensuring that our clients feel confident and cared for. 
        With a team of experienced professionals, we bring expertise and reliability you can count on.
      </p>
      <img src={Image1} alt="Our team" className="trust-image" />
    </div>
  );
}

export default Trust;
