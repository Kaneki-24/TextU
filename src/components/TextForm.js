import React,{useState}from 'react'
import PropTypes from 'prop-types'
import undoImage from 'C:/Users/vishn/Documents/React/my-app/src/undo.png';
import redoImage from 'C:/Users/vishn/Documents/React/my-app/src/redo.png'


export default function TextForm(props) {

    const [text, setText] = useState('');
    const [history, setHistory] = useState([]);
    const [redoHistory, setRedoHistory] = useState([]);

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        clearRedoHistory();
        props.showAlert("Converted to uppercase!","success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        clearRedoHistory();
        props.showAlert("Converted to lowercase!","success");
    }

    const handleClear = (event)=>{
        setText('');
        clearRedoHistory();
        props.showAlert("Cleared.","success");
    }

    const handleUndo = (event)=>{
        if (history.length > 0) {
            const previousText = history.pop();
            addToRedoHistory(text);
            setText(previousText);
            setHistory([...history]); 
        }
    }
    const handleRedo = () => {
        if (redoHistory.length > 0) {
            const nextText = redoHistory.pop();
            addToHistory(text);
            setText(nextText);
            setRedoHistory([...redoHistory]);
        }
    }

    

    const handleOnChange = (event) => {
        const newText = event.target.value;
        if (newText.split(/\s+/).length > text.split(/\s+/).length) {
            addToHistory(text);
            clearRedoHistory(); 
        }
        setText(newText);
    }

    const addToHistory = (currentText) => {
        setHistory([...history, currentText]);
    }

    const addToRedoHistory = (currentText) => {
        setRedoHistory([...redoHistory, currentText]);
    }

    const clearRedoHistory = () => {
        setRedoHistory([]);
    }

    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces!","success");
    }

    return (
        <>
            <div className="container mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2>{props.boxHeading}</h2>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'bottom' }}>
                        <button className="btn btn-outline-success btn-sm mx-2" onClick={handleUndo}
                            style={{
                                width: '25px',
                                height: '25px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '0',
                                overflow: 'hidden',
                            }} >
                            <img src={undoImage} alt="Undo" style={{ width: '25px', height: '25px' }} />
                        </button>

                        <button className="btn btn-outline-success btn-sm mx-2" onClick={handleRedo}
                            style={{
                                width: '25px',
                                height: '25px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '0',
                                overflow: 'hidden',
                            }}  >
                            <img src={redoImage} alt="Redo" style={{ width: '25px', height: '25px' }} />
                        </button>
                    </div>
                </div>
                <textarea className="form-control" value={text} onChange={handleOnChange} 
                    style = {{
                        backgroundColor: props.mode==='dark' ? props.darkModeColor : 'white',
                        color: props.mode==='dark' ? 'white' : 'black'}} id="textbox" rows="10" >
                </textarea>

                <button className="btn btn-outline-success btn-sm mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-outline-success btn-sm mx-3" onClick={handleLoClick}>Convert to Lowercase</button>

                <button className="btn btn-outline-danger btn-sm mx-3" onClick={handleClear}>Clear</button>

                <button className="btn btn-outline-success btn-sm mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
                
            </div>
            <div className="container my-3" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
                <h2>Text summary</h2>
                <p style={{color: "#A9A9A9",fontFamily: "aria" }}>{text.split(/\s+/).filter(word => word.length > 0).length} words and {text.length} characters</p>
                <p style={{color: "#A9A9A9",fontFamily: "aria" }}>Avg time need to read : {0.0042 * text.split(/\s+/).filter(word => word.length > 0).length} min</p>
                
            </div>
        </> 
    )
}
TextForm.propTypes = {
    boxHeading: PropTypes.string.isRequired
}

