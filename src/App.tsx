import { SetStateAction, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';

function HomePage() {
    useEffect(() => {
      document.title = "Home | Chris Jaksec";
    }, []);
  
    return (
      <>
        <div className="title">Hi, I'm Chris Jaksec!</div>
        <div className="who-i-am">I build software.</div>
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
    );
}

function AboutPage() {
  useEffect(() => {
    document.title = "About | Chris Jaksec";
  }, []);

  return (
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
  );
}

function ProjectsPage() {
  useEffect(() => {
    document.title = "Projects | Chris Jaksec";
  }, []);

  return (
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
  );
}

function Tabs({ onTabClick }: { onTabClick: (path: string) => void }) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="tabs">
      <div className={`selected-tab tab cursor-pointer ${currentPath === '/' ? 'underline' : ''}`} onClick={() => onTabClick('/')}>Home</div>
      <div className={`selected-tab tab cursor-pointer ${currentPath === '/about' ? 'underline' : ''}`} onClick={() => onTabClick('/about')}>About</div>
      <div className={`selected-tab tab cursor-pointer ${currentPath === '/projects' ? 'underline' : ''}`} onClick={() => onTabClick('/projects')}>Projects</div>
    </div>
  );
}

function PageWrapper() {
  const [transitioning, setTransitioning] = useState(false);
  const [pendingPath, setPendingPath] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleTabClick = (path: string) => {
    if (location.pathname === path) return;
    setTransitioning(true);
    setPendingPath(path);
  };

  useEffect(() => {
    if (transitioning && pendingPath) {
      const timeout = setTimeout(() => {
        navigate(pendingPath);
        setTransitioning(false);
        setPendingPath(null);
      }, 300); // duration should match your CSS fade
      return () => clearTimeout(timeout);
    }
  }, [transitioning, pendingPath, navigate]);

  return (
    <>
      <Tabs onTabClick={handleTabClick} />
      <div className={`page-content ${transitioning ? 'fade-out' : 'fade-in'}`}>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="container">
        <PageWrapper />
      </div>
    </Router>
  );
}

export default App;