// Import react stuff
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import the components that need routing
import Landing from './Components/Landing/Landing' 
import Tickets from './Components/Tickets/Tickets';
import NewTicket from './Components/NewTicket/NewTicket';

// Best to not modify any of this add onto it but try not change anything

function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Landing />} /> 
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/newticket" element={<NewTicket />} />
    </Routes>
  );
}

export default AppRoutes;
