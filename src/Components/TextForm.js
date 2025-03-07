
import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState("");
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }   
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleClearClick=(event)=>{
        setText(event.target.value="");
        props.showAlert("Text Cleared","success");;
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed all unnecessary spaces","success");

    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");   
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success");;
    }

  return (
    <>
    {/* <div className='container' style={{color:props.mode==="light"?'white':'grey'}}> */}
    <div className='container' style={{color:props.mode==="light"?'black':'#d3c9c9'}}>
        <h2 className='mb-4 disabled={text.length===0} '>{props.heading}</h2>

    <div className="mb-3"> 
    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==="dark"?'#13466e':'white',color:props.mode==="dark"?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>

    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}> Clear Text</button>
    </div>
    <div>
    <h2 className='my-3'>Your Summary</h2>
    <p>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words {text.length} characters</p>
    <p>{0.08*text.split(" ").filter((e)=>{return e.length!==0}).length} minutes to read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Nothing to show"}</p>
    </div>
    </>
)}