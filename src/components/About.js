import React from 'react'
import PropTypes from 'prop-types'

export default function About(props) {
  return (
    <>
    <div className="container" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
        <h2 className="my-2" >About us</h2>
        <div className="About" id="about">
        <p>Welcome to TextUtils, your go-to tool for all text transformations and analysis. Whether you need to convert text to uppercase, lowercase, or calculate word and character counts, TextUtils provides an intuitive interface to streamline your text editing tasks. Perfect for students, writers, and anyone working with text, our tool is designed to make text manipulation quick and effortless.</p>    
            
        </div>
    </div>
    </>
  )
}
