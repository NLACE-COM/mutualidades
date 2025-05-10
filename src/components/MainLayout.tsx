
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { trackPageView } from '../utils/analytics';

interface MainLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, pageTitle = document.title }) => {
  React.useEffect(() => {
    // Track page view on component mount
    trackPageView(window.location.pathname, pageTitle);
  }, [pageTitle]);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />
      <main className="flex flex-col relative">
        {children}
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

export default MainLayout;
