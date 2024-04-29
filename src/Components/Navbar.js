import React from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {
  // const arr = ["Text","About","Home"];
  return (
    <nav className="navigate">
      <div className="navitems">
      <ul>
        <li>
          <a href="/">{props.home}</a>
        </li>
        <li>
          <a href="/">{props.text}</a>
        </li>
        <li>
          <a href="/">{props.about}</a>
        </li>
        <li>
          <a href="/">{props.contact}</a>
        </li>
      </ul>
      </div>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
    </nav>
  );
}

Navbar.prototypes = {
  text: PropTypes.string,
  about: PropTypes.string,
  home: PropTypes.string,
};
