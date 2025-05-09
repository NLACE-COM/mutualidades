
import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LeyKarin from '../components/LeyKarin';
import SafeEnvironments from '../components/SafeEnvironments';
import PositiveWorkplace from '../components/PositiveWorkplace';
import Importance from '../components/Importance';
import ContactInfo from '../components/ContactInfo';
import FrequentQuestions from '../components/FrequentQuestions';
import LaborInspection from '../components/LaborInspection';
import MutualSearch from '../components/MutualSearch';
import Footer from '../components/Footer';
import WorkplaceImageSlider from '../components/WorkplaceImageSlider';
import ParallaxBackground from '../components/ParallaxBackground';

const Index = () => {
  // Ref for handling scroll position
  const scrollRef = useRef<number>(0);
  
  useEffect(() => {
    // Set up intersection observer for fade-in animations with different directions
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Add staggered animation for children with stagger-item class
            const staggeredElements = entry.target.querySelectorAll('.stagger-item');
            staggeredElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 150); // 150ms delay between each element
            });
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
    );

    // Observe all animated sections
    document.querySelectorAll('.fade-in-section, .fade-in-left, .fade-in-right, .fade-in-up, .fade-in-down').forEach(section => {
      observer.observe(section);
    });
    
    // Handle scroll direction for parallax effects
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollDirection = currentScrollPos > scrollRef.current ? 'down' : 'up';
      
      // Apply different parallax speeds based on scroll direction
      document.querySelectorAll('.parallax-element').forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-speed') || '0.1');
        const offset = scrollDirection === 'down' ? 
          currentScrollPos * speed : 
          currentScrollPos * (speed * 0.8);
          
        (el as HTMLElement).style.transform = `translateY(${offset}px)`;
      });
      
      scrollRef.current = currentScrollPos;
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />
      <main className="flex flex-col relative">
        {/* Hero section with seamless connection to LeyKarin */}
        <div className="relative z-10">
          <Hero />
        </div>
        
        {/* LeyKarin with proper positioning */}
        <div className="relative z-20">
          <LeyKarin />
        </div>
        
        {/* SafeEnvironments with parallax effect */}
        <SafeEnvironments />
        
        {/* WorkplaceImageSlider with dynamic background */}
        <ParallaxBackground density="medium" colors={['#F5A034', '#FFC000', '#108CB0']}>
          <WorkplaceImageSlider />
        </ParallaxBackground>
        
        <PositiveWorkplace />
        
        {/* Importance with enhanced animations */}
        <Importance />
        
        <LaborInspection />
        
        {/* FAQ section with enhanced animations */}
        <ParallaxBackground density="low" colors={['#108CB0', '#F5A034', '#108CB0']}>
          <FrequentQuestions />
        </ParallaxBackground>
        
        <ContactInfo />
        <MutualSearch />
      </main>
      <Footer />
      
      {/* Add custom CSS for animations and responsive behavior */}
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
        
        /* Improved gradient connector styles */
        .section-connector {
          position: relative;
        }
        
        .section-connector::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: linear-gradient(to bottom, transparent 0%, rgba(243, 243, 233, 0.5) 50%, #f3f3e9 100%);
          z-index: 5;
        }

        /* Responsive adjustments for all screen sizes */
        @media (min-width: 1600px) {
          .container {
            max-width: 1400px;
          }
        }
        
        /* Custom media query to handle short but wide screens */
        @media (max-height: 700px) and (min-width: 1024px) {
          .py-24 {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          
          .py-20 {
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
          }
          
          .py-16 {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
        }
        
        /* Extra tall screens */
        @media (min-height: 1000px) {
          .py-24 {
            padding-top: 6rem;
            padding-bottom: 6rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
