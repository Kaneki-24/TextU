import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{ useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";  

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [darkModeColor, setDarkModeColor] = useState('#212529'); 

  const showAlert= (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout( () => {
        setAlert(null);
    }, 1500)
  }
  

  const toggle = ()=>{
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor= darkModeColor;
      showAlert("Darkmode Enabled","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor= 'white';
      showAlert("Lightmode Enabled","success");
    }    
  }

  const handleColorChange = (color) => {
    setDarkModeColor(color);
    if (mode === 'dark') {
      document.body.style.backgroundColor = color;
    }
  };
  
  return (
  <>
  <Router>
    <Navbar title="Textutil" mode={mode} toggleMode={toggle} darkModeColor={darkModeColor} onColorChange={handleColorChange}/>
    <Alert alert={alert}/>
    <Routes>
      <Route exact path="/about" element={<About mode={mode} />} />
      <Route exact path="/" element={<TextForm showAlert={showAlert} boxHeading='Enter the Text' mode={mode} darkModeColor={darkModeColor}/>} />
    </Routes>
  </Router>  
    
  </>
    
  );
}

export default App;



