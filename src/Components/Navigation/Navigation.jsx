// This one is a lot more commented as I tend to change nav bars quite a bit so it was vital for me to be able to quickly change little things

// Import react stuff
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

// Import global contexts
import { UserContext } from '../../App' // Keep in mind that the user context is purely for a testing enviroment here
import { DarkContext } from '../../App'

// Import additional components
import DarkButton from '../Dark/DarkButton' // Import the dark mode button for the nav bar

function Navigation() {
  // States
  const [user, setUser] = useContext(UserContext) // Get the values of user from the UserContext
  const [darkMode, setDarkMode] = useContext(DarkContext) // Get the darkMode values from DarkContext


  const navClass = darkMode ? 'nav-dark':'nav-light' // This is used to set the navigation between dark mode and light mode

  // Content
  return (
    <div className={`navigation ${navClass}`}>
      <nav> 
        <ul> 
            <section className='segment'> 
                <h1 className='title'><Link to='/'>Lux Hotels</Link></h1>
            </section>
            <section className='segment'> 
                <DarkButton />
                <li className='gen-link'><Link to='/manage'>Manage bookings</Link></li>
                <li className='gen-link'><Link to='/settings'>Settings</Link></li>
                <li className='nav-user'><Link>{user.username}</Link></li>
                <li className='book-btn'><Link to='/room' >Book a room</Link></li>
            </section>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
