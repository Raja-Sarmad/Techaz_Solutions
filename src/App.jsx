import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './components/Home';
import ServicePage from './components/ServicePage';

// Pages
import About from './pages/About';
import ServicesHub from './pages/ServicesHub';
import CaseStudiesPage from './pages/CaseStudies';
import FaqsPage from './pages/Faqs';
import ContactPage from './pages/Contact';
import TeamMember from './pages/TeamMember';

// Har route change par page top se start ho
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesHub />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/team/:id" element={<TeamMember />} />
        <Route path="/faqs" element={<FaqsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
