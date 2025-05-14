
import { useState, useEffect, useRef } from 'react';

interface CounterValues {
  cases: number;
  laborHarassment: number;
  sexualHarassment: number;
  largeCompanies: number;
  womenReporters: number;
}

interface UseCounterAnimationResult {
  animatedValues: CounterValues;
  startCountAnimation: () => void;
}

// Advanced easing functions for smoother animation
const easeOutQuart = (x: number): number => {
  return 1 - Math.pow(1 - x, 4);
};

const easeInOutCubic = (x: number): number => {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
};

export const useCounterAnimation = (targetValues: CounterValues): UseCounterAnimationResult => {
  // Visual values (what's displayed to user)
  const [animatedValues, setAnimatedValues] = useState<CounterValues>({
    cases: 0,
    laborHarassment: 0,
    sexualHarassment: 0,
    largeCompanies: 0,
    womenReporters: 0
  });
  
  // Internal values for smoother calculations (with decimals)
  const internalValues = useRef<CounterValues>({
    cases: 0,
    laborHarassment: 0,
    sexualHarassment: 0,
    largeCompanies: 0,
    womenReporters: 0
  });
  
  const [hasAnimated, setHasAnimated] = useState(false);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
    };
  }, []);

  const startCountAnimation = () => {
    // Prevent restarting animation if already completed
    if (hasAnimated) return;
    
    // Stop any existing animation
    if (animationRef.current) {
      clearInterval(animationRef.current);
    }
    
    // Longer duration for smoother animation
    const duration = 2500;
    
    // Optimal frame rate for smooth animation (24fps is visually smooth enough)
    const frameDuration = 1000 / 24;
    const totalFrames = Math.round(duration / frameDuration);
    
    // Track animation progress
    let frame = 0;
    let lastProgress = 0;
    
    // Staggered start times for a more natural feel (in ms)
    const staggerDelays = {
      cases: 0,
      laborHarassment: 150,
      sexualHarassment: 300,
      largeCompanies: 200,
      womenReporters: 350
    };
    
    // Calculate whether each counter has started based on frame
    const hasCounterStarted = (key: keyof CounterValues, currentFrame: number) => {
      const delayFrames = Math.round(staggerDelays[key] / frameDuration);
      return currentFrame >= delayFrames;
    };

    animationRef.current = setInterval(() => {
      frame++;
      
      // Apply sophisticated easing function for more natural animation curve
      // Using easeInOutCubic for middle values and easeOutQuart for ending
      const rawProgress = frame / totalFrames;
      const progress = rawProgress < 0.8 ? 
        easeInOutCubic(rawProgress / 0.8) : 
        easeOutQuart((rawProgress - 0.8) / 0.2);
      
      // Calculate smooth increments based on progress difference
      const increment = progress - lastProgress;
      lastProgress = progress;
      
      // Update internal reference values (with decimals for smooth calculations)
      const keys = Object.keys(targetValues) as Array<keyof CounterValues>;
      
      // Update each internal value separately based on stagger timing
      keys.forEach(key => {
        if (hasCounterStarted(key, frame)) {
          const target = targetValues[key];
          // Calculate actual progress for this specific counter
          const counterStartFrame = Math.round(staggerDelays[key] / frameDuration);
          const counterProgress = (frame - counterStartFrame) / (totalFrames - counterStartFrame);
          
          // Apply easing to counter-specific progress
          const easedProgress = counterProgress < 0.8 ? 
            easeInOutCubic(counterProgress / 0.8) : 
            easeOutQuart((counterProgress - 0.8) / 0.2);
            
          // Set internal value with decimal precision
          internalValues.current[key] = Math.min(easedProgress * target, target);
        }
      });
      
      // Update React state with rounded values for display
      // This creates a visual "stepping" effect that looks more natural
      setAnimatedValues({
        cases: Math.round(internalValues.current.cases),
        laborHarassment: Math.round(internalValues.current.laborHarassment),
        sexualHarassment: Math.round(internalValues.current.sexualHarassment),
        largeCompanies: Math.round(internalValues.current.largeCompanies),
        womenReporters: Math.round(internalValues.current.womenReporters)
      });
      
      // End animation and set final exact values
      if (frame >= totalFrames) {
        // Ensure final values match target exactly
        setAnimatedValues(targetValues);
        clearInterval(animationRef.current!);
        animationRef.current = null;
        setHasAnimated(true);
      }
    }, frameDuration);
  };

  return { animatedValues, startCountAnimation };
};
