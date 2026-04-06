import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './components/Home';

// 8 Pages Imports
import CustomSoftware from './pages/CustomSoftware';
import WebDevelopment from './pages/WebDevelopment';
import MobileApps from './pages/MobileApps';
import Ecommerce from './pages/Ecommerce';
import AIAutomation from './pages/AIAutomation';
import CloudInfrastructure from './pages/CloudInfrastructure';
import DigitalTransformation from './pages/DigitalTransformation';
import BusinessAnalytics from './pages/BusinessAnalytics';

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
        <Route path="/custom-software" element={<CustomSoftware />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/mobile-apps" element={<MobileApps />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/ai-automation" element={<AIAutomation />} />
        <Route path="/cloud-infrastructure" element={<CloudInfrastructure />} />
        <Route path="/digital-transformation" element={<DigitalTransformation />} />
        <Route path="/business-analytics" element={<BusinessAnalytics />} />
      </Routes>
    </Router>
  );
}

export default App;
