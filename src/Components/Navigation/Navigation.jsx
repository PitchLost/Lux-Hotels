import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <div className='navigation'>
      <nav> 
        <ul> 
            <section className='segment'> 
                <h1 className='title'><Link to='/'>Lux Haven Hotels</Link></h1>
            </section>
            <section className='segment'> 
                <li className='gen-link'><Link >Why Us</Link></li>
                <li className='gen-link'><Link >View Rooms</Link></li>
                <li className='gen-link'><Link>Manage bookings</Link></li>
                <li className='book-btn'><Link to='/room' >Book a room</Link></li>
            </section>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
