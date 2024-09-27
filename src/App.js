import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AppRoutes from './routes';
import Navigation from './Components/Navigation/Navigation';
import React, { useEffect, useState } from 'react';


export const RoomContext = React.createContext(); 
export const UserContext = React.createContext();
export const DarkContext = React.createContext();
function App() {
  const [user, setUser] = useState({username: 'Guest'})
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  
  

  
  return (
    <div className="App">
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
