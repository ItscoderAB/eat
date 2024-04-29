import React from 'react'

function Mainbody() {
  return (
    <div className="contain">
    <h4 className="mx-3">Find Your Table</h4>
    <h2 className="mx-3">
      Reserve With ---
      <span>
        <b>
          <i> Eat</i>
        </b>{" "}
      </span>
    </h2>
    <button className="button">Click Me</button>
    <p>
      You Have No Business Connected to this Account.{" "}
      <a href="/">Click Me to Connect</a>
    </p>
  </div>
  )
}

export default Mainbody