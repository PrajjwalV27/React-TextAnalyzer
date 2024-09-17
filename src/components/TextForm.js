import React, { useState } from "react";

export default function TextForm(props) {
    //for UpperCase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success")
  };

    //for LowerCase
  const handleLpClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success")
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear Text", "success")
  };

  const countSpaces = (text) => {
    return text.split(" ").length - 1;
  };

  const handleExtraSpace = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space adjusted", "success")
  }

  const handleOnChange = (event) => {
    // console.log("On Changed!");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode === 'dark'?'black':'white', color:props.mode === 'dark'?'white':'black'}}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-2" style={{ marginLeft: '10px' }} onClick={handleLpClick}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary mx-2" style={{ marginLeft: '10px' }} onClick={clearText}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-2" style={{ marginLeft: '10px' }} onClick={handleExtraSpace}>
        Remove Extra Spaces
      </button>
      <div className="container my-2" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>Your Text summary</h2>
        <p>{text.split(" ").length} words and {text.length} character and and {countSpaces(text)} spaces</p>
        <p>{0.008*text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in textarea to preview"}</p>
      </div>
    </div>
    </>
  );
}
