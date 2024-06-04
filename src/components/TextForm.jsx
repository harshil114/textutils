export default function TextForm(props){
    return(
        <>
            <div className="container">
                <div className="mb-3">
                    <h1 className="my-3">{props.heading}</h1>                
                    <textarea className="form-control" id="myBox" rows="8"></textarea>
                    <button className="btn btn-primary my-3 mx-2">Uppercase</button>
                    <button className="btn btn-primary my-3 mx-2">Lower case</button>
                </div>

                <div className="container">
                    <h4>Your text summary</h4>
                    <p>words and characters</p>
                    <p>Minutes read</p>
                    <h5>Preview</h5>
                    <p></p>
                </div>
                
            </div>
        </>
    );
}