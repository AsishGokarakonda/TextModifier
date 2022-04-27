import React from 'react'
import { useState } from 'react'
export default function Form(props) {
    const [text, setText] = useState("")
    const textChanger = (event) => {
        setText(event.target.value)
    }
    const handleFocus = (event) => {
        event.target.select()
    }
    const clickedUpper = () => {
        let result = text.toUpperCase();
        setText(result)
        if (text.trim()!==""){
            props.promptAlert("Text converted to uppercase successfully","primary")
        }
        else{
            props.promptAlert("Please write atleast one alphabet to convert to uppercase","danger")
        }
    }
    const clickedLower = () => {
        let result = text.toLowerCase();
        setText(result)
        if (text.trim()!==""){
            props.promptAlert("Text converted to lowercase successfully","warning")
        }
        else{
            props.promptAlert("Please write atleast one alphabet to convert to lowercase","danger")
        }
    }
    const clickedDelete = () => {
        document.getElementById("exampleFormControlTextarea1").value = "";
        setText("")
        if (text===""){
            props.promptAlert("Nothing is there to delete","danger")
        }
        else{
            props.promptAlert("Text deleted successfully","danger")
        }
    }
    const clickedCopy = async () => {
        console.log(text)
        await navigator.clipboard.writeText(text);
        if (text === "") {
            props.promptAlert("Nothing is there to copy","danger")
        }
        else {
            props.promptAlert("Text copied successfully","success")
        }
    }
    function WordCount(str) {
        return str.split(' ')
            .filter(function (n) { return n !== '' })
            .length;
    }
    const mystyle = {
        color: props.mode === "light"? '#212529':"white",
        backgroundColor: props.mode === "light"? "white":"#212529",
      };
    
    return (
        <>
            <div className="container" >
                <div className="mb-3" style={{ marginTop: "30px" }}>
                    <h2>{props.toptext}</h2>
                    <textarea className="form-control" style={mystyle} value={text} id="exampleFormControlTextarea1" onChange={textChanger} onFocus={handleFocus} rows="5"></textarea>
                </div>
                <button type="button " className="btn btn-primary mx-2" onClick={clickedUpper}>Convert to uppercase</button>
                <button type="button " className="btn btn-warning mx-2" onClick={clickedLower}>Convert to lowercase</button>
                <button type="button " className="btn btn-danger mx-2" onClick={clickedDelete}>Delete text</button>
                <button type="button " className="btn btn-success mx-2" onClick={clickedCopy}>Copy text</button>
            </div>
            <div className="container" style={{ marginTop: "30px" }}>
                <h3>Your text summary</h3>
                <div>Length of the text you have entered is : {text.length} </div>
                <div>Number of words in the text you have entered is : {WordCount(text)}</div>
            </div>

        </>
    )
}
