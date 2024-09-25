import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AppRoutes from './routes';
import Navigation from './Components/Navigation/Navigation';
import React, { useState } from 'react';


export const Context = React.createContext(); 
function App() {

  const [selectedRoom, setSelectedRoom] = useState(null)

  
  return (
    <div className="App">
      <Router>
            <Navigation />
            <Context.Provider value={[selectedRoom, setSelectedRoom]}>
              <AppRoutes />
            </Context.Provider>
      </Router>
    </div>
  );
}

export default App;
