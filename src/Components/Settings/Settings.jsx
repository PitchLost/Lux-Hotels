// Import react stuff
import React, { useContext, useState } from 'react';
import './Settings.css';

// Import contexts
import { DarkContext } from '../../App'; // Dark mode
import { UserContext } from '../../App'; // User info (Remember this is just a testing enviroment)

function Settings() {

  // States
  const [user, setUser] = useContext(UserContext);
  const [notifications, setNotifications] = useState(true); // This does not actually do anything if true
  const [darkMode, setDarkMode] = useContext(DarkContext)


  // Handler Functions
  const handleUsernameChange = (e) => setUser({username: e.target.value});
  const handleNotificationsToggle = () => setNotifications(!notifications);
  const handleDarkModeToggle = () => setDarkMode(!darkMode)

  // Dark mode dynamic classname
  const settingsClass = darkMode ? 'settings-dark':'settings-light'

  // Content
  return (
    <div className={`settings-tab ${settingsClass}`}>
      <h2>Settings</h2>

      <div className="settings-item">
        <label htmlFor="username">Change Username</label>
        <input
          type="text"
          id="username"
          value={user.username}
          onChange={handleUsernameChange}
          placeholder="Enter new username"
        />
      </div>

      <div className="settings-item">
        <label htmlFor="notifications">Allow Notifications</label>
        <input
          type="checkbox"
          id="notifications"
          checked={notifications}
          onChange={handleNotificationsToggle}
        />
      </div>
      <div className="settings-item">
        <label htmlFor="notifications">Enable Dark Mode</label>
        <input
          type="checkbox"
          id="darkmode"
          checked={darkMode}
          onChange={handleDarkModeToggle}
        />
      </div>
    </div>
  );
};

export default Settings;
