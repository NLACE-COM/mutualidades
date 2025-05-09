
import React from 'react';
import { useParallax } from '@/hooks/use-parallax';

interface BackgroundShapeProps {
  top: string;
  left: string;
  size: string;
  color: string;
  speed?: number;
  delay?: number;
  opacity?: number;
  rotate?: boolean;
}

const BackgroundShape: React.FC<BackgroundShapeProps> = ({ 
  top, 
  left, 
  size, 
  color, 
  speed = 0.1,
  delay = 0,
  opacity = 0.1,
  rotate = false
}) => {
  const offset = useParallax({ speed, reverse: true });

  return (
    <div 
      className="absolute rounded-full pointer-events-none"
      style={{
        top,
        left,
        width: size,
        height: size,
        backgroundColor: color,
        opacity,
        transform: `translate3d(0, ${offset}px, 0) ${rotate ? `rotate(${offset}deg)` : ''}`,
        transition: `transform 0.3s ease-out, opacity 0.5s ease-in-out`,
        animationDelay: `${delay}s`,
      }}
    />
  );
};

interface ParallaxBackgroundProps {
  children?: React.ReactNode;
  density?: 'low' | 'medium' | 'high';
  colors?: string[];
  preserveMargins?: boolean;
  noSpacing?: boolean;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ 
  children,
  density = 'medium',
  colors = ['#108CB0', '#F5A034', '#FFC000'],
  preserveMargins = true,
  noSpacing = false
}) => {
  // Determine number of shapes based on density
  const numShapes = density === 'low' ? 3 : density === 'medium' ? 6 : 9;
  
  const shapes = Array.from({ length: numShapes }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 5 + 3}rem`,
    color: colors[i % colors.length],
    speed: Math.random() * 0.5 + 0.05,
    delay: i * 0.2,
    opacity: Math.random() * 0.2 + 0.05,
    rotate: Math.random() > 0.5,
  }));

  // Apply style to preserve margins of children and eliminate extra spacing
  const containerStyle: React.CSSProperties = {
    ...(preserveMargins ? { marginTop: 0, marginBottom: 0 } : {}),
    ...(noSpacing ? { padding: 0, margin: 0 } : {})
  };

  return (
    <div className="relative overflow-hidden" style={containerStyle}>
      {shapes.map((shape) => (
        <BackgroundShape key={shape.id} {...shape} />
      ))}
      {children}
    </div>
  );
};

export default ParallaxBackground;
