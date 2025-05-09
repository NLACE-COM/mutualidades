
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LeyKarin from '../components/LeyKarin';
import SafeEnvironments from '../components/SafeEnvironments';
import PositiveWorkplace from '../components/PositiveWorkplace';
import Importance from '../components/Importance';
import ContactInfo from '../components/ContactInfo';
import FrequentQuestions from '../components/FrequentQuestions';
import LaborInspection from '../components/LaborInspection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Set up intersection observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all fade-in sections
    document.querySelectorAll('.fade-in-section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <LeyKarin />
        <SafeEnvironments />
        <PositiveWorkplace />
        <Importance />
        <LaborInspection />
        <FrequentQuestions />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
