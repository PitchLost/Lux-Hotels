import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AppRoutes from './routes';
import Navigation from './Components/Navigation/Navigation';
import React, { useState } from 'react';


export const RoomContext = React.createContext(); 
function App() {
  const [user, setUser] = useState(null)
  const [selectedRoom, setSelectedRoom] = useState(null)

  
  return (
    <div className="App">
      <Router>
            <Navigation />
            <RoomContext.Provider value={[selectedRoom, setSelectedRoom]}>
              <AppRoutes />
            </RoomContext.Provider>
      </Router>
    </div>
  );
}

export default App;
