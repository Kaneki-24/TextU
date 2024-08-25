import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) 
{
  const handleColorChange = (e) => {
    props.onColorChange(e.target.value);
  };

  return (
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li>
        </ul>
      </div>
      
      <div className={`form-check form-switch text-${props.mode==='light' ? 'dark' : 'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox"  id="modeSwitch"/>
          <label className="form-check-label" htmlFor="modeSwitch">Enable DarkMode</label>
      </div>

      <div className="ms-3" >
          <select className={`form-select text-${props.mode === 'light' ? 'bg-white text-dark' : 'bg-dark text-white'}`} onChange={handleColorChange} value={props.darkModeColor} style={{ fontSize:'15px' ,width: '125px' }}>
            <option className="dropdown-option" value="#212529">Default</option>
            <option className="dropdown-option" value="#343a40">Charcoal</option>
            <option className="dropdown-option" value="#495057">Slate Gray</option>
            <option className="dropdown-option" value="#2F4F4F">Dark Slate Gray</option>
            <option className="dropdown-option" value="#696969">Dim Gray</option>
          </select>
      </div>

    </div>
  </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,  // .isRequired can be used if title must be passed, will show error if not passed if defaultProps is not there 
    aboutText: PropTypes.string.isRequired
}   

Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "About"
};

