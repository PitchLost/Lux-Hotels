// Import the react stuff
import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Import other components
import AppRoutes from './routes';
import Navigation from './Components/Navigation/Navigation';


// Global contexts
export const RoomContext = React.createContext(); 
export const UserContext = React.createContext();
export const DarkContext = React.createContext();


function App() {
  // States
  const [user, setUser] = useState({username: 'Guest'})
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  // Class for darkmode. This could have been done in a better way to allow for any component to access it but unfortunatly I did not think of that before doing it.
  const appClass = darkMode ? 'app-dark':'app-light'

  
  

  // Content
  return (
    <div className={`App ${appClass}`}>
      <Router>
        <UserContext.Provider value={[user, setUser]}>
          <DarkContext.Provider value={[darkMode, setDarkMode]}>
            <Navigation />
            <RoomContext.Provider value={[selectedRoom, setSelectedRoom]}>
              <AppRoutes />
            </RoomContext.Provider>
          </DarkContext.Provider>
        </UserContext.Provider>

      </Router>
    </div>
  );
}

export default App;
