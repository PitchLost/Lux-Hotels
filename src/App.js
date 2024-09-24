import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import Navigation from './Components/Navigation/Navigation';
function App() {
  return (
    <div className="App">
      <Router>
            <Navigation />
            <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
