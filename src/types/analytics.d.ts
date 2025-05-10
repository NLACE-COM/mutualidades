
// Type definitions for Google Analytics
interface Window {
  dataLayer: any[];
  gtag: (
    command: string,
    targetId: string,
    params?: { 
      [key: string]: any 
    }
  ) => void;
}
