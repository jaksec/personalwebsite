import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Typewriter from './Typewriter'; // Adjusted path to match relative location

function HomePage() {
    useEffect(() => {
      document.title = "Home";
    }, []);
  
    return (
      <>
        <div className="title">Hi, I'm Chris Jaksec!</div>
        <Typewriter />
        <div className="button-container">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <img className='selected-tab' src="/media-icons/resume.svg" alt="Resume" />
          </a>
          <a href="https://www.linkedin.com/in/jaksec" target="_blank" rel="noopener noreferrer">
            <img className='selected-tab' src="/media-icons/linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="https://www.github.com/jaksec" target="_blank" rel="noopener noreferrer">
            <img className='selected-tab' src="/media-icons/github.svg" alt="GitHub" />
          </a>
        </div>
      </>
    );
}

function AboutPage() {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <>
      <div className="about-me-wrapper">
        <div className="about-me-content">
                I'm currently a senior at the University of Central Florida majoring in computer science.
                I'm an aspiring full-stack engineer and primarily work with React, TypeScript,
                and Python. In my free time, you can catch me exploring nature, collecting fragrances, or playing games 
                with my friends.
        </div>
        <div className="about-me-content">
                I first started programming at 17, when I was bored in my room and tried to craft a to-do list out of pure HTML.
                I became more curious and interested so I started learning Python and immediately fell in love with the creativity
                and problem-solving programming had to offer. I continued my passion for programming at UCF and have
                been learning and growing ever since.
        </div>
          <div className="tech-stack-wrapper">
            <div className="tech-stack-title">My Tech Stack:</div>
              <div className="tech-stack-container">
                <a>
                  <img className="selected-tab" src="/tech-icons/python.svg" alt="Python" />
                </a>
                <a>
                  <img className="selected-tab" src="/tech-icons/java.svg" alt="Java" />
                </a>
                <a>
                  <img className="selected-tab" src="/tech-icons/c.svg" alt="C" />
                </a>
                <a>
                  <img className="selected-tab" src="/tech-icons/javascript.svg" alt="JavaScript" />
                </a>
                <a>
                  <img className="selected-tab" src="/tech-icons/typescript.svg" alt="TypeScript" />
                </a>
                <a>
                  <img className="selected-tab" src="/tech-icons/react.svg" alt="React" />
                </a>
                <a>
                  <img className="selected-tab" src="/tech-icons/node.svg" alt="Node" />
                </a>
                <a>
                  <img className="selected-tab" src="/tech-icons/express.svg" alt="Express" />
                </a>
                <a>
                  <img className="selected-tab" src="/tech-icons/mongodb.svg" alt="MongoDB" />
                </a>
              </div>
        </div>

        <div style={{ marginTop: '100px' }} />
        </div>
    </>
  );
}

function ProjectsPage() {
  useEffect(() => {
    document.title = "Projects";
  }, []);

  return (
      <div className="project-list-wrapper">
            <div className="project-card">
                <div className="project-icon">
                  <img className="selected-tab" src="/project-icons/noteboard.svg" alt="Noteboard" />
                </div>
                <div className="project-title">
                  Noteboard
                  <a href="https://www.github.com/jaksec/noteboard" target="_blank" rel="noopener noreferrer">
                  <img className="selected-tab" src="/symbol-icons/link.svg" />
                  </a>
                </div>
                <div className="project-tags">Python, Tkinter, NumPy</div>
                <div className="project-description">
                A Python application that captures audio input & translates it into keyboard key presses. Utilizes speech recognition & automation libraries 
                to convert musical notes into real-time key presses.
              </div>
            </div>
            <div className="project-card">
                <div className="project-icon">
                  <img className="selected-tab" src="/project-icons/eye.svg" alt="BlurrSmith.ai" />
                </div>
                <div className="project-title">
                  BlurrSmith.ai
                  <a href="https://6507104a5d971a4275e265e1--strong-kringle-b099de.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <img className="selected-tab" src="/symbol-icons/link.svg" />
                  </a>
                </div>
                <div className="project-tags">React, TypeScript, Tailwind CSS, Python, OpenCV</div>
                <div className="project-description">
                A React-based web app that automatically detects and blurs faces and license plates in user-uploaded images to protect privacy. 
                Integrated Flask and OpenCV on the backend for image processing, with Tailwind CSS used to create a clean and intuitive user interface.
              </div>
            </div>
            <div className="project-card">
                <div className="project-icon">
                  <img className="selected-tab" src="/project-icons/law.svg" alt="LawgicBot" />
                </div>
                <div className="project-title">
                  LawgicBot
                  <a href="https://github.com/Lewin-B/KnightHacks-2023" target="_blank" rel="noopener noreferrer">
                  <img className="selected-tab" src="/symbol-icons/link.svg" />
                  </a>
                </div>
                <div className="project-tags">React, TypeScript, Python, Azure</div>
                <div className="project-description">
                An AI chatbot that provides real-time legal guidance through a user-friendly React interface. Powered by a GPT-based model via the OpenAI API, 
                it delivers contextually accurate responses. The backend, developed with Flask and Python, connects to an Azure-hosted SQL database to retrieve relevant legal information efficiently.
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
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleTabClick = (path: string) => {
    if (location.pathname === path) return;
    setTransitioning(true);
    setPendingPath(path);
  };

  // Handle route transitions
  useEffect(() => {
    if (transitioning && pendingPath) {
      const timeout = setTimeout(() => {
        navigate(pendingPath);
        setTransitioning(false);
        setPendingPath(null);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [transitioning, pendingPath, navigate]);

  // Wait for all <img> elements to finish loading before fade-in
  useEffect(() => {
    const images = document.querySelectorAll("img");
    let loaded = 0;

    const onImageLoad = () => {
      loaded++;
      if (loaded === images.length) {
        setImagesLoaded(true);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        loaded++;
      } else {
        img.addEventListener("load", onImageLoad);
        img.addEventListener("error", onImageLoad); // In case of 404s or broken URLs
      }
    });

    if (loaded === images.length) {
      setImagesLoaded(true);
    }

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", onImageLoad);
        img.removeEventListener("error", onImageLoad);
      });
    };
  }, [location]); // run again on route change

  const pageClass = transitioning
    ? "fade-out"
    : imagesLoaded
    ? "fade-in"
    : ""; // no fade until images are ready

  return (
    <>
      <Tabs onTabClick={handleTabClick} />
      <div className={`page-content ${pageClass}`}>
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