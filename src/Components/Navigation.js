import React from 'react'
import { Link } from 'react-router-dom'
function Navigation() {
  return (
    <div className="navitems">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Components/FetchAPI">FetchAPI</Link>
      </li>
      <li>
        <Link to="/Components/About">About</Link>
      </li>
      <li>
        <Link to="/Components/Service">Services</Link>
      </li>
      <li>
        <Link to="/Components/Contact">Contact Us</Link>
      </li>
    </ul>
    </div>
  )
}

export default Navigation