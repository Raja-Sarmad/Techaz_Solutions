import React from 'react';
// Components path check karlein (../ ka matlab hai pages folder se bahar nikal kar components mein jana)
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AboutUs from '../components/Aboutus';
import CaseStudies from '../components/CaseStudies';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import FAQ from '../components/faq'; // Agar file ka naam FAQ.jsx hai to 'FAQ' karein
import Blog from '../components/Blog';
import ScrollToTop from '../components/ScrollToTop';

function Home() {
  return (
    <div className="min-h-screen bg-[#121212]">
      {/* Navigation */}
      <Navbar />
      
      {/* Page Sections */}
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="Aboutus">
          <AboutUs />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="CaseStudies">
          <CaseStudies />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="Testimonial">
          <Testimonials />
        </section>

        <section id="Process">
          <Process />
        </section>

        <section id="Faq">
          <FAQ />
        </section>

        <section id="Blog">
          <Blog />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Utilities & Footer */}
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default Home;
