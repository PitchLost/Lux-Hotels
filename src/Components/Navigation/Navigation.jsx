import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div>
      <nav>
        <section className="nav-title">
          <Link to='/'>Support Panel</Link>
        </section>
        <section className="nav-links">
          <ul>
            <li className='link'><Link to='/new-ticket'>New Ticket</Link></li>
            <li className='link'><Link to='/tickets'>Tickets</Link></li>
          </ul>
        </section>
      </nav>
    </div>
  );
}

export default Navigation;
