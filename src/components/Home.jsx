import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import Hero from '../components/Hero';
import AboutUs from '../components/Aboutus';
import CaseStudies from '../components/CaseStudies';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import FAQ from '../components/faq';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import WhatWeDo from '../components/WhatWeDo';

const Home = () => {
  return (
    <PageLayout>
      <Hero />

      <WhatWeDo />

      {/* About */}
      <div id="about">
        <AboutUs />
      </div>

      {/* Process */}
      <Process />

      {/* Case Studies */}
      <CaseStudies />

      {/* Projects */}
      <Projects />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Blog */}
      <Blog />

      {/* Contact */}
      <Contact />

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 text-white py-10 px-6 text-center overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-6">
            Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">Something Epic.</span>
          </h2>
          <p className="text-blue-100 text-lg max-w-xl mx-auto mb-10">
            From car dealer platforms to full marketing engines — tell us your goal and we'll build the system that reaches it.
          </p>
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-4 bg-white text-blue-700 hover:bg-blue-50 px-6 sm:px-12 py-5 sm:py-6 rounded-full font-black text-xs uppercase tracking-widest transition-all hover:-translate-y-0.5"
          >
            Start Your Project
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
