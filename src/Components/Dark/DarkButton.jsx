// Import react stuff
import React, { useContext } from 'react';
import { DarkContext } from '../../App';
import './DarkButton.css'

// Import the font awesome libary
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import the font awesome icons for the button
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';

function DarkButton() {
    const [darkMode, setDarkMode] = useContext(DarkContext);

    // Button that can be used anywhere in the app
    return (
        <button className='dark-btn' onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
        </button>
    );
}

export default DarkButton;
