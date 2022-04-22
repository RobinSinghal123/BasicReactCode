import React, { useState } from 'react'

export default function Textform(props) {
    const ChnagetoUpperCase = () => {
        // console.log("Click the button "+text);
        let newText = text.toUpperCase()  
        setText(newText)
    }
    const ChnagetoLowerCase = () => {
        // console.log("Click the button "+text);
        let newText = text.toLowerCase()  
        setText(newText)
    }
    const handelchange = (event) => { 
        // console.log("on Change");
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter the text here2')
    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myText" className="form-label"></label>
                <textarea className="form-control" value={text} onChange={handelchange} id="myText" rows="9"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={ChnagetoUpperCase}>Convert to Upper ase</button>
            <button className="btn btn-primary" onClick={ChnagetoLowerCase}>Convert to Lower Case</button>

        </div>
        <div className="container">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} Words , {text.length} Character</p>
            <p>{text.split(" ").length * 0.008} minutes Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
