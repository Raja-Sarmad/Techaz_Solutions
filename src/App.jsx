import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutUs from './components/Aboutus';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import FAQ from './components/faq';
import Blog from './components/Blog';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Har section ko ID dena zaroori hai */}
      <div id="home">
        <Hero />
      </div>

      <div id="Aboutus">
        <AboutUs />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="CaseStudies">
        <CaseStudies />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="Testimonial">
        <Testimonials />
      </div>

      <div id="Process">
        <Process />
      </div>

      <div id="Faq">
        <FAQ />
      </div>

      <div id="Blog">
        <Blog />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <div id="ScrollToTop">
        <ScrollToTop />
      </div>

      <Footer />
    </div>

  );
}

export default App;