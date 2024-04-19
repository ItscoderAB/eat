import React,{ useState } from "react";

export default function TextForm(props) {
 

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
  return (
    <div>
      <h3 className="mx-3">{props.heading}</h3>
      <form className= "my-3 mx-3">
        <div className="m-2">
          <textarea
            className="form-control border border-success"
            placeholder="Enter text here..."
             value={text} onChange={handleonChange}
            id="textArea"
            rows="6"
          />
          <button className="btn btn-primary my-3 mx-3" onClick={handleUp}>To Upper Case</button>
          <button className="btn btn-primary my-3 mx-3" onClick={handlelo}>To Lower Case</button>
          <button className="btn btn-primary my-3 mx-3" onClick={handleSplit}>Slice</button>
        </div>
      </form>
    </div>
  );
}
