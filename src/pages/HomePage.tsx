import React from 'react';
import Hero from '../components/Hero';
import ServiceShowcase from '../components/ServiceShowcase';
import AIFeatures from '../components/AIFeatures';
import StudentPortal from '../components/StudentPortal';
import SMEPortal from '../components/SMEPortal';
import Pricing from '../components/Pricing';
import Team from '../components/Team';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="services">
        <ServiceShowcase />
      </section>
      <section id="ai-features">
        <AIFeatures />
      </section>
      <section id="students">
        <StudentPortal />
      </section>
      <section id="companies">
        <SMEPortal />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}