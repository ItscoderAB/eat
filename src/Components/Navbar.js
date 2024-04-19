import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
 // const arr = ["Text","About","Home"];
  return (
    <nav className='navigate'>
        <ul>
  <li><a className="active" href="#home">Home</a></li>
  <li><a href="/">{props.text}</a></li>
  <li><a href="/">{props.about}</a></li>
  <li><a href="/">{props.home}</a></li>
</ul>

    </nav>
  )
}

Navbar.prototypes = {text: PropTypes.string,
about: PropTypes.string,
home: PropTypes.string}
