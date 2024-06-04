import { useState } from "react";

export default function TextForm(props){

    const [text,setText] = useState('');


    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const toUpCase = () => {
        setText(text.toUpperCase())
    }

    const toLowerCase = () => {
        setText(text.toLowerCase())
    }

    const clearText = () => {
        setText('');
    } 

    const wordCount = text.split(" ").length;
    const charCount = text.length;
    const readTime = 0.008 * wordCount;
   
    return(
        <>
            <div className="container">
                <div className="mb-3">
                    <h1 className="my-3">{props.heading}</h1>                
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
                    <button className="btn btn-primary my-3 mx-2" onClick={toUpCase}>Uppercase</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={toLowerCase}>Lower case</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={clearText}>Clear</button>

                </div>

                <div className="container">
                    <h4>Your text summary</h4>
                    <p>{wordCount} words and {charCount} characters</p>
                    <p>{readTime.toFixed(2)} Minutes read</p>
                    <h5>Preview</h5>
                    <p>{text}</p>
                </div>

            </div>
        </>
    );
}