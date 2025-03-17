import React, { useState } from 'react'

export default function TextArea(props) {
    const handleUpperCaseClick = () =>{
        console.log("OnCLick Clicked")
        let upperValue = value.toUpperCase();
        setValue(upperValue)
    }
    const handleLowerCaseClick = (event) =>{
        setValue(value.toLowerCase())
    }
    const changeEvent = (event) =>{
        console.log("On Change")
        setValue(event.target.value)
    }
    const [value,setValue] = useState("")
  return (
   <>
   
   <div className="container">
   <h1>{props.heading}</h1>
     <div className="mb-3" >  
  <textarea className="form-control" value={value} onChange={changeEvent}   rows="8" placeholder='Write here'></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpperCaseClick}>UPPERCASE</button>
  <button className="btn btn-success mx-2" onClick={handleLowerCaseClick} >LOWERCASE</button>
   </div>
    <div className="container my-3">
        <h2>Text Summary</h2>
        <p>Number of words <b>{value===''?0:value.split(" ").length}</b> and number of character <b>{value.length}</b></p>
        <p>Time Taken to read <b>{value===''?0:0.008 * value.split(" ").length} minutes</b></p>
        <h2>Preview:</h2> 
        <p>{value}</p>
    </div>
   </>  
  )
}
