import { useState } from "react";

export default function TextForm(props){

    const [text,setText] = useState('')

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const toUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        
    }
    return(
        <>
            <div className="container">
                <div className="mb-3">
                    <h1 className="my-3">{props.heading}</h1>                
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
                    <button className="btn btn-primary my-3 mx-2" onClick={toUpCase}>Uppercase</button>
                    <button className="btn btn-primary my-3 mx-2">Lower case</button>
                </div>

                <div className="container">
                    <h4>Your text summary</h4>
                    <p>words and characters</p>
                    <p>Minutes read</p>
                    <h5>Preview</h5>
                    <p>{text}</p>
                </div>

            </div>
        </>
    );
}