import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <div>
      <nav> 
        <ul> 
            <section className='segment'> 
                <h1><Link>Lux Haven Hotels</Link></h1>
            </section>
            <section className='segment'> 
                <li><Link >Who are we</Link></li>
                <li><Link >View our options</Link></li>
                <li className='book-btn'><Link >Book a room</Link></li>
            </section>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
