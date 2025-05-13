
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

export const useCounterAnimation = (targetValues: CounterValues): UseCounterAnimationResult => {
  const [animatedValues, setAnimatedValues] = useState<CounterValues>({
    cases: 0,
    laborHarassment: 0,
    sexualHarassment: 0,
    largeCompanies: 0,
    womenReporters: 0
  });

  const startCountAnimation = () => {
    const duration = 1500;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      setAnimatedValues({
        cases: Math.floor(targetValues.cases * Math.min(progress, 1)),
        laborHarassment: Math.floor(targetValues.laborHarassment * Math.min(progress, 1)),
        sexualHarassment: Math.floor(targetValues.sexualHarassment * Math.min(progress, 1)),
        largeCompanies: Math.floor(targetValues.largeCompanies * Math.min(progress, 1)),
        womenReporters: Math.floor(targetValues.womenReporters * Math.min(progress, 1))
      });
      
      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  };

  return { animatedValues, startCountAnimation };
};
