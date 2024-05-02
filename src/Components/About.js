import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return <>
    <div className="navitems">
      <ul>
        <li>
          <Link to="/">Home</Link>
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
    <section> this is about page</section>
      </div>
    </>
}

export default About