import React, { useState } from "react";

export default function Textform(props) {
    const [text, setText] = useState("");


    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }

    const handleLoClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");

    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!", "success");

    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!", "success");

    }
    const handleRemoveExtraSpace = () => {

        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space Removed!!", "success");


    }
    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }




    return (
        <>


            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#0a074d' }}>
                <h1 className="mb-3">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#0a074d' }} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleRemoveExtraSpace}>Remove extra space</button>
                <div className="container my-3" >
                    <h1>Your text Summary</h1>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").length}Minutes read</p>
                    <h1>Preview</h1>
                    <p>{text.length > 0 ? text : "Enter something to view the preview here"}</p>
                </div>
            </div>

        </>
    )
}