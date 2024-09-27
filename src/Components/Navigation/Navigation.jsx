import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

import { UserContext } from '../../App'
import { DarkContext } from '../../App'

function Navigation() {
  const [user, setUser] = useContext(UserContext)
  return (
    <div className='navigation'>
      <nav> 
        <ul> 
            <section className='segment'> 
                <h1 className='title'><Link to='/'>Lux Haven Hotels</Link></h1>
            </section>
            <section className='segment'> 
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
