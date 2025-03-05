'use client';
import { useState, useEffect } from 'react';
import NavbarSimple from './components/Navbar';
import HeroSection from './components/Hero';
import AboutSection from './components/About';
import ProjectsSection from './components/Projects';
import ExperienceSection from './components/Experience';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  const [viewportAmount, setViewportAmount] = useState(0.5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setViewportAmount(0.2);
      } else {
        setViewportAmount(0.5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <NavbarSimple />
      <motion.section
        id="hero"
        className="p-4 md:p-8 lg:p-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: false, amount: viewportAmount }}
      >
        <HeroSection />
      </motion.section>
      <motion.section
        id="about"
        className="p-4 md:p-8 lg:p-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: false, amount: viewportAmount }}
      >
        <AboutSection />
      </motion.section>
      <motion.section
        id="projects"
        className="p-4 md:p-8 lg:p-12 "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: false, amount: viewportAmount }}
      >
        <ProjectsSection />
      </motion.section>
      <motion.section
        id="experience"
        className="p-4 md:p-8 lg:p-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: false, amount: viewportAmount }}
      >
        <ExperienceSection />
      </motion.section>
      <section className="p-4 md:p-8 lg:p-12">
        <Footer />
      </section>
    </>
  );
}
