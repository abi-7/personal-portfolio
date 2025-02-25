'use client';
import NavbarSimple from './components/Navbar';
import HeroSection from './components/Hero';
import AboutSection from './components/About';
import ProjectsSection from './components/Projects';
import ExperienceSection from './components/Experience';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <NavbarSimple />
      <motion.section
        id="hero"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <HeroSection />
      </motion.section>
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <AboutSection />
      </motion.section>
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <ProjectsSection />
      </motion.section>
      <motion.section
        id="experience"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <ExperienceSection />
      </motion.section>
      <section>
        <Footer />
      </section>
    </>
  );
}
