import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Home() {
    const [textColor, setTextColor] = useState("");
  const [backgroundColor, setBgColor] = useState("white");

  const [text, textChange] = useState();
const handleonChange = (e)=>{
  console.log("hi there im on change")
  textChange(e.target.value)
}
const handleUp = (e)=>{
 textChange(text.toUpperCase());
  e.preventDefault();
}
const handlelo = (e)=>{
 textChange(text.toLowerCase());
  e.preventDefault();
}
const handleSplit = (e)=>{
  console.log("split function")
 textChange(text.slice(8));
  e.preventDefault();
}
const colors = ["red","blue","green","cyan","yellow","brown","purple","orange","violet","Black"]
const randomColor = colors[Math.floor(Math.random()*colors.length)]

const [btnText,setBtnText] = useState("")

const handleColor = (e)=>{
setTextColor(randomColor) 
e.preventDefault();                                
}
const handleBgColor = (e)=>{
  setBgColor(randomColor)
  setBtnText(randomColor)
 e.preventDefault();
}

const handleDummy = (e)=>{
  textChange("Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorum corrupti doloremque! Blanditiis rerum excepturi, in aspernatur omnis officiis molestias enim suscipit sint esse velit, ab, harum reiciendis eius earum unde adipisci cupiditate maxime iste totam laborum. Veritatis delectus, provident itaque ad obcaecati quidem quaerat aliquam, quasi quae qui dolor.");
  e.preventDefault();
}
const handleClear = (e)=>{
  textChange("");
  e.preventDefault();
}
  return<>
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
    </div>
    <div className="mx-3">
      <h3 className="mx-3">Enter Text Here</h3>
      <form className= "my-3 mx-3">
        <div className="m-2">
          <textarea style={{color: textColor , backgroundColor:backgroundColor}}
            className="form-control border border-success"
            placeholder="Enter text here..."
             value={text} onChange={handleonChange}
            id="textArea"
            rows="6"
          />
          <button className="btn btn-primary my-3 mx-3" onClick={handleUp}>ToUPPERCASE</button>
          <button className="btn btn-primary my-3 mx-3" onClick={handlelo}>Tolowercase</button>
          <button className="btn btn-primary my-3 mx-3" onClick={handleSplit}>Slice</button>
          <button className="btn btn-primary my-3 mx-3" onClick={handleColor}>Change txt Color {textColor}</button>
          <button className="btn btn-primary my-3 mx-3" onClick={handleBgColor}>Change Bg Color {btnText}</button>
          <button className="btn btn-primary my-3 mx-3" onClick={handleDummy}>Dummy text</button>
          <button className="btn btn-primary my-3 mx-3" onClick={handleClear}>Clear</button>
        </div>
        <div className="my-2 mx-2 size">
          <h1>Your Text Summary</h1>
          <p>{text}  Characters and {text} words</p>
        </div>
      </form>
    </div>
  </>
  
}

export default Home