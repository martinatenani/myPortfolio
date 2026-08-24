import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//case studies
import FilmateCaseStudy from './components/cases/FilmateCaseStudy';
import GameJamsPrototypes from './components/cases/GameJamsPrototypes';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    //<Router basename={process.env.NODE_ENV === 'production' ? '/myPortfolio' : '/'}>
   //<Router basename={process.env.NODE_ENV === 'development' ? '/myPortfolio' : '/'}>
   <Router basename={process.env.PUBLIC_URL}>
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
            
            <FadeIn transitionDuration={700}>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Main />
                            <Project />
                            <Expertise />
                            <Timeline />
                            <Contact />
                        </>
                    } />

                    <Route path="/project/filmate-ai" element={<FilmateCaseStudy />} />
                    <Route path="/project/gamejams-prototypes" element={<GameJamsPrototypes />} />
                </Routes>
            </FadeIn>
            
            <Footer />
        </div>
    </Router>
    );
}

export default App;