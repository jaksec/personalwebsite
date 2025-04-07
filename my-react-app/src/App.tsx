import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className="tabs">
        <div className="tab">Home</div>
        <div className="tab">About</div>
      </div>

      <div className="title">
        Hi, I'm Chris Jaksec!
      </div>

      <div className="who-i-am">
        I'm a software developer.
      </div>

      <div className="button-container">
        <a href="src/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
          <img src="src/assets/icons8-resume-50.png" alt="Resume"/>
        </a>
        <a href="https://www.linkedin.com/in/jaksec" target="_blank" rel="noopener noreferrer">
          <img src="src/assets/icons8-linkedin.svg" alt="LinkedIn"/>
        </a>
        <a href="https://www.github.com/jaksec" target="_blank" rel="noopener noreferrer">
          <img src="src/assets/icons8-github.svg" alt="GitHub"/>
        </a>
      </div>
    </>
  )
}

export default App
