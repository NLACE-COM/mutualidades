
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
        {/* Hero section with absolutely no spacing */}
        <div className="relative" style={{ margin: 0, padding: 0 }}>
          <Hero />
        </div>
        
        {/* LeyKarin with parallax background and all spacing controls enabled */}
        <ParallaxBackground density="low" colors={['#108CB0', '#F5A034', '#FFC000']} preserveMargins={true} noSpacing={true}>
          <LeyKarin />
        </ParallaxBackground>
        
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
