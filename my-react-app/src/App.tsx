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
          Projects
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
                <a>
                  <img className="selected-tab" src="src/assets/tech-icons/react.svg" alt="React" />
                </a>
                <a>
                  <img className="selected-tab" src="src/assets/tech-icons/node.svg" alt="Node" />
                </a>
                <a>
                  <img className="selected-tab" src="src/assets/tech-icons/express.svg" alt="Express" />
                </a>
                <a>
                  <img className="selected-tab" src="src/assets/tech-icons/mongodb.svg" alt="MongoDB" />
                </a>
              </div>
          </div>
          </>
        ) : (
          <>
          <div className="project-list-wrapper">
            <div className="project-card">
                <div className="project-icon">
                  <img src="src/assets/noteboard.svg" alt="Noteboard" />
                </div>
                <div className="project-title">
                  Noteboard
                  <a href="https://www.github.com/jaksec/noteboard" target="_blank" rel="noopener noreferrer">
                  <img className="selected-tab" src="src/assets/link.svg" />
                  </a>
                </div>
                <div className="project-description">
                  A collaborative note-taking web application built with React, Express, and MongoDB.
                  Users can create, edit, and share notes in real-time with others.
              </div>
            </div>
            <div className="project-card">
                <div className="project-icon">
                  <img src="src/assets/eye.svg" alt="BlurrSmith.ai" />
                </div>
                <div className="project-title">
                  BlurrSmith.ai
                  <a href="https://6507104a5d971a4275e265e1--strong-kringle-b099de.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <img className="selected-tab" src="src/assets/link.svg" />
                  </a>
                </div>
                <div className="project-description">
                  A collaborative note-taking web application built with React, Express, and MongoDB.
                  Users can create, edit, and share notes in real-time with others.
              </div>
            </div>
            <div className="project-card">
                <div className="project-icon">
                  <img src="src/assets/law.svg" alt="LawgicBot" />
                </div>
                <div className="project-title">
                  LawgicBot
                  <a href="https://github.com/Lewin-B/KnightHacks-2023" target="_blank" rel="noopener noreferrer">
                  <img className="selected-tab" src="src/assets/link.svg" />
                  </a>
                </div>
                <div className="project-description">
                  A collaborative note-taking web application built with React, Express, and MongoDB.
                  Users can create, edit, and share notes in real-time with others.
              </div>
            </div>

            <div style={{ marginTop: '100px' }} />

            </div>
          </>
        )}
      </div>
      </div>
    </>
  )
}

export default App;