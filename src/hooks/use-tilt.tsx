
import { useRef, useState, useEffect } from 'react';

interface TiltOptions {
  max?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
  easing?: string;
}

export const useTilt = ({
  max = 10,
  perspective = 1000,
  scale = 1.05,
  speed = 400,
  easing = 'cubic-bezier(.03,.98,.52,.99)'
}: TiltOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});
  
  useEffect(() => {
    if (!ref.current) return;
    
    const element = ref.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const tiltX = ((x - centerX) / centerX) * max;
      const tiltY = ((y - centerY) / centerY) * max * -1;
      
      setTiltStyle({
        transform: `perspective(${perspective}px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) scale3d(${scale}, ${scale}, ${scale})`,
        transition: `transform 0s ${easing}`,
      });
    };
    
    const handleMouseLeave = () => {
      setTiltStyle({
        transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
        transition: `transform ${speed}ms ${easing}`,
      });
    };
    
    const handleMouseEnter = () => {
      setTiltStyle({
        transition: `transform 0s ${easing}`,
      });
    };
    
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [max, perspective, scale, speed, easing]);
  
  return { ref, tiltStyle };
};
