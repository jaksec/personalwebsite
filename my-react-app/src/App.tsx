import { SetStateAction, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [page, setPage] = useState(0); // 0 = home, 1 = about
  const [transitioning, setTransitioning] = useState(false);

  const handleTabClick = (tabIndex: SetStateAction<number>) => {
    if (tabIndex === page) return;

    setTransitioning(true);
    setTimeout(() => {
      setPage(tabIndex);
      setTransitioning(false);
    }, 300); // Match this with the fade duration in CSS
    setSelectedTab(tabIndex);
  };

  return (
    <>
    <div className="container">
      <div className="tabs">
        <div
          className={`selected-tab tab cursor-pointer ${selectedTab === 0 ? 'underline' : ''}`}
          onClick={() => handleTabClick(0)}
        >
          Home
        </div>
        <div
          className={`selected-tab tab cursor-pointer ${selectedTab === 1 ? 'underline' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          About
        </div>
        <div
          className={`selected-tab tab cursor-pointer ${selectedTab === 2 ? 'underline' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          Contact
        </div>
      </div>

      <div className={`page-content ${transitioning ? 'fade-out' : 'fade-in'}`}>
        {page === 0 ? (
          <>
            <div className="title">Hi, I'm Chris Jaksec!</div>
            <div className="who-i-am">I'm a software developer :)</div>
            <div className="button-container">
              <a href="src/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
                <img className='selected-tab' src="src/assets/icons8-resume-50.png" alt="Resume" />
              </a>
              <a href="https://www.linkedin.com/in/jaksec" target="_blank" rel="noopener noreferrer">
                <img className='selected-tab' src="src/assets/icons8-linkedin.svg" alt="LinkedIn" />
              </a>
              <a href="https://www.github.com/jaksec" target="_blank" rel="noopener noreferrer">
                <img className='selected-tab' src="src/assets/icons8-github.svg" alt="GitHub" />
              </a>
            </div>
          </>
        ) : 
        page === 1 ? (
          <>
          <div className="about-me-content">
              I'm currently a junior at the University of Central Florida majoring in computer science.
              I'm an aspiring full-stack engineer and primarily work with React, TypeScript,
              and Python. In my free time, you can catch me exploring nature, collecting fragrances, or playing games 
              with my friends :)
          </div>
          <div className="tech-stack-wrapper">
            <div className="tech-stack-title">My Tech Stack:</div>
              <div className="tech-stack-container">
                <a>
                  <img className="selected-tab" src="src/assets/tech-icons/python.svg" alt="Python" />
                </a>
                <a>
                  <img className="selected-tab" src="src/assets/tech-icons/java.svg" alt="Java" />
                </a>
                <a>
                  <img className="selected-tab" src="src/assets/tech-icons/c.svg" alt="C" />
                </a>
                <a>
                  <img className="selected-tab" src="src/assets/tech-icons/javascript.svg" alt="JavaScript" />
                </a>
                <a>
                  <img className="selected-tab" src="src/assets/tech-icons/typescript.svg" alt="TypeScript" />
                </a>
              </div>
          </div>
          </>
        ) : (
          <>
            <div className="contact-page">
              <p>Contact page content goes here.</p>
            </div>
          </>
        )}
      </div>
      </div>
    </>
  )
}

export default App;