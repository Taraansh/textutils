import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        //console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been converted to Uppercase", "success");
    }
    
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text has been converted to Lower", "success");
    }
    
    const handleClear = () =>{
        let newText = ('');
        setText(newText);
        props.showAlert("Text has been cleared", "success");
    }
    
    const handleOnChange = (event) =>{
        //console.log("On change");
        setText(event.target.value)
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied", "success");
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces have been removed", "success");
    }

    const [text, setText] = useState('');
    // text = "new text"; //Wrong way to change state
    // setText("new text"); //correct way to change state
    return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'white':'#010c0f'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'#010c0f'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#010c0f'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
}
