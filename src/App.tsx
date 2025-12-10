import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Typewriter from './Typewriter';

function HomePage() {
    useEffect(() => {
      document.title = "Chris Jaksec";
    }, []);
  
    return (
      <>
        <header>
          <div className="title">Hi, I'm Chris Jaksec! <span className="wave">👋</span></div>
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
        </header>
      </>
    );
}

function AboutPage() {
  useEffect(() => {
    document.title = "About | jaksec.dev";
  }, []);

  return (
    <>
      <div className="about-me-wrapper">
        <div className="about-me-content">
                I'm currently a senior at UCF majoring in computer science.
                I'm an aspiring full-stack engineer and love all things Python and React.
                In my free time, you can catch me working on my latest project, shopping and collecting fragrances, or binge-watching the latest movie or TV show I'm hooked to at the moment.
        </div>
        <div className="about-me-content">
                I first started programming at 17, when I was bored in my room and tried to craft a to-do list out of pure HTML.
                I became more curious and interested in the idea of creating programs that could benefit the lives of others, so I started learning Python and immediately fell in love with the creativity
                and problem-solving software development had to offer. I continued my passion for software at UCF and have
                been learning and growing as a developer ever since.
        </div>
          <div className="tech-stack-wrapper">
            <div className="tech-stack-title">Tech Stack:</div>
              <div className="tech-stack-container">
                <a>
                  <img className="selected-tab" src="/tech-icons/python.svg" alt="Python" />
                </a>
                <a>
                  <img className="selected-tab" src="/tech-icons/java.svg" alt="Java" />
                </a>
                <a>
                  <img className="selected-tab" src="/tech-icons/typescript.svg" alt="TypeScript" />
                </a>
                <a>
                  <img className="selected-tab" src="/tech-icons/javascript.svg" alt="JavaScript" />
                </a>
                <a>
                  <img className="selected-tab" src="/tech-icons/node.svg" alt="Node.js" />
                </a>
                <a>
                  <img className="selected-tab" src="/tech-icons/react.svg" alt="React.js" />
                </a>
                <a>
                  <img className="selected-tab" src="/tech-icons/next.svg" alt="Next.js" />
                </a>
                <a>
                  <img className="selected-tab" src="/tech-icons/express.svg" alt="Express.js" />
                </a>
                <a>
                  <img className="selected-tab" src="/tech-icons/flask.svg" alt="Flask" />
                </a>
                <a>
                  <img className="selected-tab" src="/tech-icons/fastapi.svg" alt="FastAPI" />
                </a>
                <a>
                  <img className="selected-tab" src="/tech-icons/tailwind.svg" alt="Tailwind CSS" />
                </a>
                <a>
                  <img className="selected-tab" src="/tech-icons/bigquery.svg" alt="Google BigQuery" />
                </a>
                <a>
                  <img className="selected-tab" src="/tech-icons/airflow.svg" alt="Apache Airflow" />
                </a>
                <a>
                  <img className="selected-tab" src="/tech-icons/docker.svg" alt="Docker" />
                </a>
                <a>
                  <img className="selected-tab" src="/tech-icons/postgresql.svg" alt="PostgreSQL" />
                </a>
                <a>
                  <img className="selected-tab" src="/tech-icons/mongodb.svg" alt="MongoDB" />
                </a>
                <a>
                  <img className="selected-tab" src="/tech-icons/elasticsearch.svg" alt="Elasticsearch" />
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
    document.title = "Projects | jaksec.dev";
  }, []);

  return (
      <div className="project-list-wrapper">
              <div className="project-card">
                <div className="project-icon">
                  <img className="selected-tab" src="/project-icons/vul.svg" alt="Vul-RAG" />
                </div>
                <div className="project-title">
                  Vul-RAG
                  <a href="https://vulrag.cloud/" target="_blank" rel="noopener noreferrer">
                  <img className="selected-tab" src="/symbol-icons/link.svg" />
                  </a>
                </div>
                <div className="project-tags">Python, Flask, Elasticsearch</div>
                <div className="project-description">
                A vulnerability analysis platform that ingests user-provided code, retrieves relevant security knowledge through a RAG pipeline, and produces detailed vulnerability reports with contextual explanations and references.
              </div>
            </div>
            <div className="project-card">
                <div className="project-icon">
                  <img className="selected-tab" src="/project-icons/nutrition.svg" alt="KnightTracks" />
                </div>
                <div className="project-title">
                  KnightTracks
                  <a href="https://www.github.com/jaksec/knighttracks" target="_blank" rel="noopener noreferrer">
                  <img className="selected-tab" src="/symbol-icons/link.svg" />
                  </a>
                </div>
                <div className="project-tags">React, Express, MongoDB</div>
                <div className="project-description">
                A nutrition tracker that supports real-time meal logging, automatic macronutrient analysis, and personalized goal tracking to help users monitor their daily intake with clarity and convenience.
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
                <div className="project-tags">React, Python, Azure</div>
                <div className="project-description">
                An AI legal assistant that provides real-time guidance, delivering clear and contextually accurate answers to user questions through an intuitive chat interface.
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
    <nav>
      <div className="tabs">
        <div className={`selected-tab tab cursor-pointer ${currentPath === '/' ? 'underline' : ''}`} onClick={() => onTabClick('/')}>Home</div>
        <div className={`selected-tab tab cursor-pointer ${currentPath === '/about' ? 'underline' : ''}`} onClick={() => onTabClick('/about')}>About</div>
        <div className={`selected-tab tab cursor-pointer ${currentPath === '/projects' ? 'underline' : ''}`} onClick={() => onTabClick('/projects')}>Projects</div>
      </div>
    </nav>
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

  // Always apply fade-in when not transitioning. Do not wait on image loads.
  const pageClass = transitioning ? "fade-out" : "fade-in";

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
  // Warm the browser cache with commonly used images on first load
  useEffect(() => {
    const assetPaths = [
      // Media icons
      "/media-icons/github.svg",
      "/media-icons/linkedin.svg",
      "/media-icons/resume.svg",
      // Project icons
      "/project-icons/vul.svg",
      "/project-icons/law.svg",
      "/project-icons/nutrition.svg",
      // Symbol icons
      "/symbol-icons/link.svg",
      // Tech icons used on About
      "/tech-icons/python.svg",
      "/tech-icons/java.svg",
      "/tech-icons/typescript.svg",
      "/tech-icons/javascript.svg",
      "/tech-icons/node.svg",
      "/tech-icons/react.svg",
      "/tech-icons/next.svg",
      "/tech-icons/express.svg",
      "/tech-icons/flask.svg",
      "/tech-icons/fastapi.svg",
      "/tech-icons/tailwind.svg",
      "/tech-icons/bigquery.svg",
      "/tech-icons/airflow.svg",
      "/tech-icons/docker.svg",
      "/tech-icons/postgresql.svg",
      "/tech-icons/mongodb.svg",
      "/tech-icons/elasticsearch.svg",
    ];

    assetPaths.forEach((src) => {
      const img = new Image();
      img.decoding = "async";
      img.loading = "eager" as any;
      img.src = src;
    });
  }, []);

  return (
    <Router>
      <div className="container">
        <PageWrapper />
      </div>
    </Router>
  );
}

export default App;