
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import MyChatBot from "./components/MyChatBot";

import {
  About,
  Contact,
  Experience,
  ArticlePreview,
  Hero,
  Navbar,
  Tech,
  Projects,
  StarsCanvas,
} from "./components";

const App = () => {
  const [showingLoader, setShowingLoader] = useState(true);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    }

    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      setShowingLoader(false);
      document.body.style.overflow = 'unset';
      document.getElementById('ic_logo').style.display = 'none';
    }, 4000);

    setTimeout(() => {
      scrollToTop();
    }, 50);
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          {!showingLoader &&
            <Navbar />
          }
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Projects />
        <ArticlePreview />
        <div className="relative z-0">
          <Contact />
          {window.innerWidth > 768 &&
            <StarsCanvas />
          }
        </div>
      </div>
      <MyChatBot/>
    </BrowserRouter>
  );
};

export default App;
