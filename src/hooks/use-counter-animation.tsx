
import { useState, useEffect } from 'react';

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

// Easing function for smoother animation
const easeOutCubic = (x: number): number => {
  return 1 - Math.pow(1 - x, 3);
};

export const useCounterAnimation = (targetValues: CounterValues): UseCounterAnimationResult => {
  const [animatedValues, setAnimatedValues] = useState<CounterValues>({
    cases: 0,
    laborHarassment: 0,
    sexualHarassment: 0,
    largeCompanies: 0,
    womenReporters: 0
  });
  
  const [hasAnimated, setHasAnimated] = useState(false);

  const startCountAnimation = () => {
    // Prevent restarting animation if already completed
    if (hasAnimated) return;
    
    // Increase duration for smoother animation
    const duration = 2000;
    // Reduce update frequency for smoother animation (less jerky movements)
    const frameDuration = 1000 / 30;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      
      // Apply easing function for more natural animation curve
      const progress = easeOutCubic(frame / totalFrames);
      
      // Use more precise calculations and avoid rounding until the end
      setAnimatedValues({
        cases: Math.round(targetValues.cases * Math.min(progress, 1)),
        laborHarassment: Math.round(targetValues.laborHarassment * Math.min(progress, 1)),
        sexualHarassment: Math.round(targetValues.sexualHarassment * Math.min(progress, 1)),
        largeCompanies: Math.round(targetValues.largeCompanies * Math.min(progress, 1)),
        womenReporters: Math.round(targetValues.womenReporters * Math.min(progress, 1))
      });
      
      if (frame === totalFrames) {
        // Ensure final values match target exactly
        setAnimatedValues(targetValues);
        clearInterval(counter);
        setHasAnimated(true);
      }
    }, frameDuration);
  };

  return { animatedValues, startCountAnimation };
};
