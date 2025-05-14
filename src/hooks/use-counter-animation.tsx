
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
  const isAnimatingRef = useRef<boolean>(false);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
    };
  }, []);

  const startCountAnimation = () => {
    // Prevent restarting animation if already completed or in progress
    if (hasAnimated || isAnimatingRef.current) return;
    
    isAnimatingRef.current = true;
    
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
    
    // Fixed minimum delay for cases to ensure animation starts properly
    // Small stagger delays for a more natural feel (in ms)
    const staggerDelays = {
      cases: 10, // Set a small delay instead of 0 to ensure proper initialization
      laborHarassment: 150,
      sexualHarassment: 300,
      largeCompanies: 200,
      womenReporters: 350
    };
    
    // Initialize all counters with small initial values to trigger the first update
    // This helps especially with the "cases" counter that might get stuck at 0
    const keys = Object.keys(targetValues) as Array<keyof CounterValues>;
    keys.forEach(key => {
      // Initialize with a very small value > 0 to ensure animation starts
      internalValues.current[key] = targetValues[key] * 0.01; 
    });
    
    // Update state once before animation to ensure initial values are not 0
    setAnimatedValues({
      cases: Math.ceil(internalValues.current.cases),
      laborHarassment: Math.ceil(internalValues.current.laborHarassment),
      sexualHarassment: Math.ceil(internalValues.current.sexualHarassment),
      largeCompanies: Math.ceil(internalValues.current.largeCompanies),
      womenReporters: Math.ceil(internalValues.current.womenReporters)
    });
    
    // Calculate whether each counter has started based on frame
    const hasCounterStarted = (key: keyof CounterValues, currentFrame: number) => {
      const delayFrames = Math.round(staggerDelays[key] / frameDuration);
      // For cases specifically, ensure it starts immediately even at frame 0
      return key === 'cases' ? true : currentFrame >= delayFrames;
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
      
      let updatedValues = { ...internalValues.current };
      let hasChanges = false;
      
      // Update each internal value separately based on stagger timing
      keys.forEach(key => {
        if (hasCounterStarted(key, frame)) {
          const target = targetValues[key];
          // Calculate actual progress for this specific counter
          const counterStartFrame = Math.round(staggerDelays[key] / frameDuration);
          // Ensure at least 1 frame for cases counter
          const adjustedCounterStartFrame = Math.max(0, counterStartFrame);
          const counterProgress = (frame - adjustedCounterStartFrame) / (totalFrames - adjustedCounterStartFrame);
          
          // Apply easing to counter-specific progress
          const easedProgress = counterProgress < 0.8 ? 
            easeInOutCubic(counterProgress / 0.8) : 
            easeOutQuart((counterProgress - 0.8) / 0.2);
            
          // Set internal value with decimal precision
          const newValue = Math.min(easedProgress * target, target);
          
          // Only mark as changed if there's a significant difference
          if (Math.abs(updatedValues[key] - newValue) > 0.1) {
            updatedValues[key] = newValue;
            hasChanges = true;
          }
        }
      });
      
      if (hasChanges) {
        internalValues.current = updatedValues;
        
        // Update React state with rounded values for display
        // Use ceiling function for "cases" to ensure it's never 0 after animation starts
        setAnimatedValues({
          cases: Math.ceil(internalValues.current.cases),
          laborHarassment: Math.round(internalValues.current.laborHarassment),
          sexualHarassment: Math.round(internalValues.current.sexualHarassment),
          largeCompanies: Math.round(internalValues.current.largeCompanies),
          womenReporters: Math.round(internalValues.current.womenReporters)
        });
      }
      
      // End animation and set final exact values
      if (frame >= totalFrames) {
        // Ensure final values match target exactly
        setAnimatedValues(targetValues);
        clearInterval(animationRef.current!);
        animationRef.current = null;
        setHasAnimated(true);
        isAnimatingRef.current = false;
      }
    }, frameDuration);
  };

  return { animatedValues, startCountAnimation };
};
