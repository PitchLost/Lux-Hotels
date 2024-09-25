// Import react stuff
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import the components that need routing
import Home from './Components/Home/Home' 
import Room from './Components/Room/Room';
import View from './Components/Room/View/View';


// Best to not modify any of this add onto it but try not change anything

function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<Room />} />
        <Route path="/view" element={<View />} />
    </Routes>
  );
}

export default AppRoutes;
