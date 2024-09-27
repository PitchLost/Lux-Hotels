import React, { useContext, useState } from 'react';
import './Settings.css';

import { DarkContext } from '../../App';
import { UserContext } from '../../App';

function Settings() {
  const [user, setUser] = useContext(UserContext);
  const [password, setPassword] = useState('');
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useContext(DarkContext)

  const handleUsernameChange = (e) => setUser({username: e.target.value});
  const handleNotificationsToggle = () => setNotifications(!notifications);
  const handleDarkModeToggle = () => setDarkMode(!darkMode)

  return (
    <div className="settings-tab">
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
        <label htmlFor="notifications">Toggle Dark Mode</label>
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
