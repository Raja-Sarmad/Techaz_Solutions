import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './components/Home';

// 8 Pages Imports
import SEOStrategy from './pages/SEOStrategy';
import WebDevelopment from './pages/WebDevelopment';
import MobileApps from './pages/MobileApps';
import GraphicDesign from './pages/GraphicDesign';
import VideoEditing from './pages/VideoEditing';
import DigitalMarketing from './pages/DigitalMarketing';


// --- YE HAI ASLI LOGIC JO SCROLL KAREGI ---
function ScrollToServices() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === '#services') {
      // Thora intezar karein taake Home page load ho jaye
      setTimeout(() => {
        const element = document.getElementById('services');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0); // Baaki pages par top par jao
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToServices /> {/* Ye har page change ko monitor karega */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seo-strategy" element={<SEOStrategy />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/mobile-apps" element={<MobileApps />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
        <Route path="/video-editing" element={<VideoEditing />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        
      </Routes>
    </Router>
  );
}

export default App;
