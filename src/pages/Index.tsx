
import React, { useEffect, useRef, useState } from 'react';
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
import { trackPageView, trackScrollDepth, trackTimeOnPage, trackSectionView } from '../utils/analytics';

const Index = () => {
  // Ref for handling scroll position
  const scrollRef = useRef<number>(0);
  // Refs for each section to track visibility
  const sectionRefs = {
    leykarin: useRef<HTMLElement | null>(null),
    entornos: useRef<HTMLElement | null>(null),
    importancia: useRef<HTMLElement | null>(null),
    inspeccion: useRef<HTMLElement | null>(null),
    preguntas: useRef<HTMLElement | null>(null),
    contacto: useRef<HTMLElement | null>(null)
  };
  // Track sections that have already been viewed
  const [viewedSections, setViewedSections] = useState<Set<string>>(new Set());
  
  // Track time on page for anti-bounce metrics
  useEffect(() => {
    // Page view tracking
    trackPageView(window.location.pathname, document.title);
    
    // Time on page tracking for anti-bounce
    const timeIntervals = [10, 30, 60, 120, 300]; // seconds
    const timeoutIds: NodeJS.Timeout[] = [];
    
    timeIntervals.forEach(seconds => {
      const timeoutId = setTimeout(() => {
        trackTimeOnPage(seconds);
      }, seconds * 1000);
      timeoutIds.push(timeoutId);
    });
    
    return () => {
      // Clear all timeouts when component unmounts
      timeoutIds.forEach(id => clearTimeout(id));
    };
  }, []);
  
  useEffect(() => {
    // Set up intersection observer for fade-in animations with different directions
    const animationObserver = new IntersectionObserver(
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

    // Observer for section visibility tracking (analytics)
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target.id) {
            const sectionId = entry.target.id;
            
            // Only track each section view once per session
            if (!viewedSections.has(sectionId)) {
              const sectionNames: {[key: string]: string} = {
                'leykarin': 'Ley Karin',
                'entornos': 'Entornos Seguros',
                'importancia': 'Importancia',
                'inspeccion-trabajo': 'Inspección del Trabajo',
                'preguntas-frecuentes': 'Preguntas Frecuentes',
                'contacto-info': 'Información de Contacto',
                'buscador-mutualidades': 'Buscador de Mutualidades'
              };
              
              trackSectionView(sectionId, sectionNames[sectionId] || sectionId);
              setViewedSections(prev => new Set(prev).add(sectionId));
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe all animated sections
    document.querySelectorAll('.fade-in-section, .fade-in-left, .fade-in-right, .fade-in-up, .fade-in-down').forEach(section => {
      animationObserver.observe(section);
    });
    
    // Observe all main sections for analytics
    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        sectionObserver.observe(ref.current);
      }
    });
    
    // Handle scroll direction for parallax effects and track scroll depth
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
      
      // Track scroll depth for analytics
      const docHeight = Math.max(
        document.body.scrollHeight, 
        document.documentElement.scrollHeight,
        document.body.offsetHeight, 
        document.documentElement.offsetHeight
      );
      const viewportHeight = window.innerHeight;
      const scrollableDistance = docHeight - viewportHeight;
      
      if (scrollableDistance > 0) {
        const scrollDepth = Math.floor((currentScrollPos / scrollableDistance) * 100);
        // Track at 25%, 50%, 75% and 90%
        if (scrollDepth === 25 || scrollDepth === 50 || scrollDepth === 75 || scrollDepth === 90) {
          trackScrollDepth(scrollDepth);
        }
      }
      
      scrollRef.current = currentScrollPos;
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      animationObserver.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [viewedSections]);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />
      <main className="flex flex-col relative">
        {/* Hero section with seamless connection to LeyKarin */}
        <div className="relative z-10">
          <Hero />
        </div>
        
        {/* LeyKarin with proper positioning */}
        <div className="relative z-20" ref={(el) => { sectionRefs.leykarin.current = el as HTMLElement | null }}>
          <LeyKarin />
        </div>
        
        {/* SafeEnvironments with parallax effect */}
        <div ref={(el) => { sectionRefs.entornos.current = el as HTMLElement | null }}>
          <SafeEnvironments />
        </div>
        
        {/* WorkplaceImageSlider with dynamic background */}
        <ParallaxBackground density="medium" colors={['#F5A034', '#FFC000', '#108CB0']}>
          <WorkplaceImageSlider />
        </ParallaxBackground>
        
        <PositiveWorkplace />
        
        {/* Importance with enhanced animations */}
        <div ref={(el) => { sectionRefs.importancia.current = el as HTMLElement | null }}>
          <Importance />
        </div>
        
        <div ref={(el) => { sectionRefs.inspeccion.current = el as HTMLElement | null }}>
          <LaborInspection />
        </div>
        
        {/* FAQ section with enhanced animations */}
        <div ref={(el) => { sectionRefs.preguntas.current = el as HTMLElement | null }}>
          <ParallaxBackground density="low" colors={['#108CB0', '#F5A034', '#108CB0']}>
            <FrequentQuestions />
          </ParallaxBackground>
        </div>
        
        <div ref={(el) => { sectionRefs.contacto.current = el as HTMLElement | null }}>
          <ContactInfo />
        </div>
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
