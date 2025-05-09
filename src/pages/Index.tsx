
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
import TestimonialsSlider from '../components/TestimonialsSlider';
import WorkplaceImageSlider from '../components/WorkplaceImageSlider';

const Index = () => {
  useEffect(() => {
    // Set up intersection observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Add staggered animation for children with data-stagger attribute
            const staggeredElements = entry.target.querySelectorAll('[data-stagger]');
            staggeredElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 100); // 100ms delay between each element
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
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
        <WorkplaceImageSlider />
        <PositiveWorkplace />
        <TestimonialsSlider />
        <Importance />
        <LaborInspection />
        <FrequentQuestions />
        <ContactInfo />
      </main>
      <Footer />
      
      {/* Add custom CSS for animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .fade-in-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        [data-stagger] {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        
        [data-stagger].visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Index;
