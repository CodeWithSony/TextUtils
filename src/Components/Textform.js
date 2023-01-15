import React, {useState} from 'react'
 
export default function Textform(props) {
const handleClick = ()=>{
// console.log("Uppercase was clicked...");
let newText = text.toUpperCase();
setText(newText);
}
const handleOnChange  = (e)=>{
  // console.log("handleOnChange was clicked...");
  setText(e.target.value);
}

  const [text, setText] = useState("Enter text here.");
  return (
    <div>
<h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleClick}>Convert to uppercase</button>
    </div>
   
  )
}
